const { Schema, model } = require('mongoose');

const preferenceSchema = new Schema(
  {
    preferences: {
      type: String,
      enum: ['Guitar', 'classical', 'acoustic', 'live gigs', 'rnb', 'singer', 'lounge', 'horns', 'piano', 'keyboards', 'synths', 'pop', 'reggae', 'club', 'electronic', 'dance', 'rock', 'band', 'drums', 'percussion']
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