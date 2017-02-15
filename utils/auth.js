module.exports = function (req, res, next) {

  // if user is authenticated in the session, complete the request
  if (req.isAuthenticated()) {
    return next();
  } else {
    // if user is not authenticated, send an error message
    res.json({ err: 'User is not authenticated' });
  }

};
