var User = require('../models/user');

var UserService = {
  findUserById: function (id, callback) {
    User.findById(id, function (err, user) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, user);
    });
  },

  findUserByGoogleId: function (id, callback) {
    User.findOne({ googleId: id }, function (err, user) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, user);
    });
  },

  createGoogleUser: function (id, token, name, email, callback) {
    var user = new User();

    user.googleId = id;
    user.googleToken = token;
    user.googleName = name;
    user.googleEmail = email;

    user.save(function (err) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, user);
    });
  },
};

module.exports = UserService;
