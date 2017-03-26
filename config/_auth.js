// NOTE change file name to auth.js
// Enter values for clientId, clientSecret, callbackUrl, and secret
// use callback URL below to run app on localhost:5555

var authConfigs = {
  googleAuth: {
    clientId: '',
    clientSecret: '',
    callbackUrl: 'http://localhost:5555/auth/google/callback',
  },

  sessionVars: {
    secret: '',
  },
};

module.exports = authConfigs;
