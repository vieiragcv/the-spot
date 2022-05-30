// const faker = require('faker');
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