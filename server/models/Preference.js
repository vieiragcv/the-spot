const { Schema, model } = require('mongoose');

const preferenceSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'Enter your preference!',
      minlength: 1,
      maxlength: 250
    },
    
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

preferenceSchema.virtual('preferenceCount').get(function() {
  return this.preference.length;
});

const Preference = model('Preference', preferenceSchema);

module.exports = Preference;