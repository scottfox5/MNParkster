var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  googleId: String,
  googleToken: String,
  googleEmail: String,
  googleName: String,
  journal: [
	   { park: String,
		date: Date,
		notes: String}
	]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
