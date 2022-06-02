const { AuthenticationError } = require("apollo-server-express");
const { User, Comment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {

/*-------------------------------------------------
-                  RESOLVERS (QUERY) 
------------------------------------------------- */

  Query: {

    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("comments")
          .populate("friends");

        return userData;
      }

      throw new AuthenticationError("Not logged in - not getting token");
    },

    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("comments")
        .populate("friend");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("comments");
    },

    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
  },

/*-------------------------------------------------
-                      MUTATIONS
------------------------------------------------- */

  Mutation: {

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addPreference: async (parent, { userId, preferenceBody }, context) => {
      console.log(preferenceBody)
      if (context.user) {
        const updatedPreferences = await User.findOneAndUpdate(
          { _id: userId },
          {
            $push: {
              preferences: { preferenceBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );
        return updatedPreferences;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create({...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        );
        return comment;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addReaction: async (parent, { commentId, reactionBody }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          {
            $push: {
              reactions: { reactionBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedComment;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");

        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addLocation: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { location: args.location } },
          { new: true }
        )

        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addOpenBio: async (parent, { username, openBio }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { username: `${username}` }, //filter
          { openBio: `${openBio}` }, //update
          { new: true } // returns document after update
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in! addOpenBio");
    },
    
    addClosedBio: async (parent, {username, closedBio}, context) => {
      if(context.user) {
        const updateUser = await User.findOneAndUpdate(
          { username: username }, //filter
          { closedBio: closedBio }, //update
          { new: true } // returns document after update
        );
        return updateUser;
      }
      throw new AuthenticationError("You need to be logged in! addClosedBio");
    },
    
    updateUser: async (parent, args, context) => {
      const updateUser = await User.findOneAndUpdate(
        { username: username },
        { 
          username: args.username,
          
        },
        { }

      )
    }

  }
};

module.exports = resolvers;