var express = require('express');
var router = express.Router();
var passport = require('../auth/passport');

router.get('/google', passport.authenticate('google',
  {
    scope: ['openid', 'email'],
    prompt: 'select_account',
  })
);

router.get('/google/callback', passport.authenticate('google',
  {
    successRedirect: '/private',
    failureRedirect: '/',
  })
);

router.get('/', function (req, res) {
  if (req.isAuthenticated()) {
    res.json({ status: true, name: req.user.googleName });
  } else {
    res.json({ status: false });
  }
});

router.get('/logout', function (req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
