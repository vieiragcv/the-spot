<<<<<<< HEAD
<<<<<<< HEAD
// All of this code is from module 21 MERN and is a placeholder for what we may or may not nee
const faker = require('faker');
=======
// // All of this code is from module 21 MERN and is a placeholder for what we may or may not need

// const faker = require('faker');
>>>>>>> 653fc39ea4195c0463101b328649f8c5a1b2fa7f

// const db = require('../config/connection');
// const { Comment, User } = require('../models');

// db.once('open', async () => {
//   await Comment.deleteMany();
//   await User.deleteMany();

//   // create user data
//   const userData = [];

//   for (let i = 0; i < 50; i += 1) {
//     const username = faker.internet.userName();
//     const email = faker.internet.email(username);
//     const password = faker.internet.password();
//     const descriptionText = faker.lorem.paragraph();
    
//     userData.push({ username, email, password, descriptionText });
//   }

//   const createdUsers = await User.collection.insertMany(userData);

//   // create friends
//   for (let i = 0; i < 100; i += 1) {
//     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//     const { _id: userId } = createdUsers.ops[randomUserIndex];

//     let friendId = userId;

//     while (friendId === userId) {
//       const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//       friendId = createdUsers.ops[randomUserIndex];
//     }

//     await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
//   }

//   // create comments
//   let createdComments = [];
//   for (let i = 0; i < 100; i += 1) {
//     const commentText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

//     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//     const { username, _id: userId } = createdUsers.ops[randomUserIndex];

//     const createdComment = await Comment.create({ commentText, username });

//     const updatedUser = await User.updateOne(
//       { _id: userId },
//       { $push: { comments: createdComment._id } }
//     );

//     createdComments.push(createdComment);
//   }

//   // create reactions
//   for (let i = 0; i < 100; i += 1) {
//     const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

//     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//     const { username } = createdUsers.ops[randomUserIndex];

//     const randomCommentIndex = Math.floor(Math.random() * createdComments.length);
//     const { _id: commentId } = createdComments[randomCommentIndex];

//     await Comment.updateOne(
//       { _id: commentId },
//       { $push: { reactions: { reactionBody, username } } },
//       { runValidators: true }
//     );
//   }

//   console.log('all done!');
//   process.exit(0);
// });


// Below is the code we will use to seed our database with data from the json since faker library is not working well
// const faker will stay commented out
// const faker = require('faker');
=======
>>>>>>> 8cce8aeac9863b023e05596bfddfa26492264c60
const userSeeds = require('./userSeed.json');
const CommentSeeds = require('./commentSeed.json');
const db = require('../config/connection');
const { Comment, User } = require('../models');

db.once('open', async () => {
  try {
    await Comment.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < CommentSeeds.length; i++) {
      const { _id, CommentAuthor } = await Comment.create(CommentSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: CommentAuthor },
        {
          $addToSet: {
            comments: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});