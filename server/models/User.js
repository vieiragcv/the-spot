const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      unique: true,
      minlength: 5
    },
    descriptionText: {
      type: String,
      required: 'A little bit about your work in the music industry',
      minlength: 1,
      maxlength: 350
  },
    category: {
        type: String,
        required: true,
        enum: ['Artist', 'Agent', 'Manager', 'AandR', 'Producer', 'Venue', 'Label Rep', 'Studio', 'Event'],
        default: 'Artist'
    },
    location: {
        type: String,
        enum: ['Miami', 'Houston', 'New York', 'Las Vegas', 'Los Angeles', 'Atlanta', 'Chicago', 'New Orleans', 'Nashville', 'Baltimore'] 
    },
    preferences: {
      type: String,
      enum: ['Guitar', 'classical', 'acoustic', 'live gigs', 'rnb', 'singer', 'lounge', 'horns', 'piano', 'keyboards', 'synths', 'pop', 'reggae', 'club', 'electronic', 'dance', 'rock', 'band', 'drums', 'percussion']
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);
    

  
// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;