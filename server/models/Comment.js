const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

<<<<<<<< HEAD:server/models/Thought.js
const thoughtSchema = new Schema(
========
const commentSchema = new Schema(
>>>>>>>> 653fc39ea4195c0463101b328649f8c5a1b2fa7f:server/models/Comment.js
  {
    commentText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
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

<<<<<<<< HEAD:server/models/Thought.js
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
========
commentSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
>>>>>>>> 653fc39ea4195c0463101b328649f8c5a1b2fa7f:server/models/Comment.js
