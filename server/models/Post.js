const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'You need to post something!',
      minlength: 1,
      maxlength: 500
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

postSchema.virtual('postCount').get(function() {
  return this.post.length;
});

const Thought = model('Post', postSchema);

module.exports = Post;