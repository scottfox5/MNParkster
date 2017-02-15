
 /** ---------- REQUIRE NODE MODULES ---------- **/
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
/** ---------- REQUIRE CUSTOM APP MODULES ---------- **/
var config = require('../config/auth');

// all db queries moved to a service layer, necessary for proper unit testing
var UserService = require('../services/user');
/** ---------- PASSPORT SESSION SERIALIZATION ---------- **/

// serialize the user onto the session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// deserialize the user from the session and provide user object
passport.deserializeUser(function (id, done) {
  UserService.findUserById(id, function (err, user) {
    if (err) {
      return done(err);
    }

    return done(null, user);
  });
});
/** ---------- PASSPORT STRATEGY DEFINITION ---------- **/
passport.use('google', new GoogleStrategy({
  // identify ourselves to Google and request Google user data
  clientID: config.googleAuth.clientId,
  clientSecret: config.googleAuth.clientSecret,
  callbackURL: config.googleAuth.callbackUrl,
}, function (token, refreshToken, profile, done) {
  // Google has responded

  // does this user exist in our database already?
  UserService.findUserByGoogleId(profile.id, function (err, user) {
      if (err) {
        return done(err);
      }

      if (user) { // user does exist!
        return done(null, user);
      }

      // user does not exist in our database, let's create one!
      UserService.createGoogleUser(profile.id, token, profile.displayName,
        profile.emails[0].value, /* we take first email address */
        function (err, user) {
          if (err) {
            return done(err);
          }
          return done(null, user);
        });
    });
}));

module.exports = passport;
