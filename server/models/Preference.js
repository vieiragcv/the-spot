const { Schema } = require('mongoose');

const preferenceSchema = new Schema(
  {
    preferenceBody: {
      type: String,
      required: true,
      maxlength: 100
    },
    username: {
      type: String,
      required: true
    }
  });
  
// preferenceSchema.virtual('preferenceCount').get(function() {
//   return this.preference.length;
// });


module.exports = preferenceSchema;


// enum: ['Guitar', 'classical', 'acoustic', 'live gigs', 'rnb', 'singer', 'lounge', 'horns', 'piano', 'keyboards', 'synths', 'pop', 'reggae', 'club', 'electronic', 'dance', 'rock', 'band', 'drums', 'percussion', 'competition', 'topline', 'restaurant/bar', 'choral', 'standards', 'festival', 'residency', 'church', 'Baltimore', 'Chicago', 'Agent', 'producer', 'New York', 'Miami', 'Nashville', 'background vocalist', 'audition'],