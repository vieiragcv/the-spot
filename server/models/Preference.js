const { Schema, model } = require('mongoose');

const preferenceSchema = new Schema(
  {
    preferences: {
      type: String,
      required: 'Enter your preference!',
      minlength: 1,
      maxlength: 250
    },
    
    username: {
      type: String,
      required: true
    }
  });
  
preferenceSchema.virtual('preferenceCount').get(function() {
  return this.preference.length;
});

const Preference = model('Preference', preferenceSchema);

module.exports = Preference;