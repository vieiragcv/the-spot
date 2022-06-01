const { AuthenticationError } = require("apollo-server-express");
const { User, Comment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {

/*-------------------------------------------------
-                        QUERY 
------------------------------------------------- */

  Query: {

    /* ------------------ME ---------------*/

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

    /* ------------------ USERS  ---------------*/

    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("comments")
        // .populate("friend");
    },

    /* ------------------USER---------------*/

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("comments");
    },

    /* ------------------COMMENTS---------------*/

    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    // comments: async (parent, { _id }) => {
    //   return Comment.findOne({ _id });
    // }
  },

/*-------------------------------------------------
-                        MUTATION
------------------------------------------------- */

  Mutation: {

    /* ------------------ADD USER---------------*/

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    /* ------------------LOGIN---------------*/

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

    /* ------------------ADD COMMENT---------------*/

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

    /* ------------------ADD REACTION ---------------*/

    addReaction: async (parent, { commentId, reactionBody }, context) => {
      if (context.user) {
        const updatedThought = await Comment.findOneAndUpdate(
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
    
    /* ------------------ADD FRIEND---------------*/

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
  },
};

module.exports = resolvers;