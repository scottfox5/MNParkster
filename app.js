/** ---------- REQUIRE NODE MODULES ---------- **/
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
/** ---------- REQUIRE CUSTOM APP MODULES ---------- **/
var passport = require('./auth/passport');
var configs = require('./config/auth');
var index = require('./routes/index');
var auth = require('./routes/auth');
var isLoggedIn = require('./utils/auth');
var private = require('./routes/private/index');
var database = require('./utils/database');


/// added for photo uploading
require('dotenv').load();//loads environment variables locally
var uploads = require('./routes/uploads');

var weather = require('./routes/weather')

/** ---------- EXPRESS APP CONFIG ---------- **/
var app = express();
app.use('/public', express.static('public'));  // serve files from public

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



/** ---------- DATABASE CONNECTION HANDLING ---------- **/

database();

/** ---------- SESSION CREATION AND STORAGE ---------- **/
/**
 * Creates session that will be stored in memory.
 * @todo Before deploying to production,
 * configure session store to save to DB instead of memory (default).
 * @see {@link https://www.npmjs.com/package/express-session}
 */
app.use(session({
  secret: configs.sessionVars.secret,
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: { maxage: 60000, secure: false },
}));
/** ---------- PASSPORT ---------- **/
app.use(passport.initialize()); // kickstart passport
/**
 * Alters request object to include user object.
 * @see {@link auth/passport}
 */
app.use(passport.session());
/** ---------- ROUTES ---------- **/
app.use('/auth', auth);
app.use('/private', isLoggedIn, private);
app.use('/', index);
app.use('/uploads', uploads);
app.use('/weather', weather)
/** ---------- SERVER START ---------- **/
app.set('port', process.env.PORT || 5555);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
