var authConfigs = {
  googleAuth: {
    clientId: '853875757633-23t5cdbrckt3c444atnntnjhg4akot9o.apps.googleusercontent.com',
    clientSecret: '5_q40m2PIgyZk3Ym21Nf8mzT',
    // callbackUrl: 'http://localhost:5555/auth/google/callback', // to run locally
    callbackUrl: 'https://mn-parkster.herokuapp.com/auth/google/callback', // to run on heroku
  },

  sessionVars: {
    secret: '55555',
  },
};

module.exports = authConfigs;
