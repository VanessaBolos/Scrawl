const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  local: {
    email: { type: String, required: false },
    password: { type: String, required: false }
  },
  googleId: { type: String, required: false },
  displayName: { type: String, required: false },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  profileImage: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

// generating a hash for password
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', UserSchema);
