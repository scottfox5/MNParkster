var express = require('express');
var router  = express.Router();

var journal = require('./journal');
var checklist = require('./checklist');
var quote = require('./quote');

/** ---------- SUBROUTES ---------- **/
router.use('/journal', journal);
router.use('/checklist', checklist);
router.use('/quote', quote)
/**
 * GET private/index
 */
router.get('/', function (req, res) {
  // console.log('req.user.journal from index.js in router.get', req.user.journal);
  res.redirect('/'); // they made it!
});

module.exports = router;
