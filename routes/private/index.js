var express = require('express');
var router  = express.Router();
var journal = require('./journal');
var checklist = require('./checklist');

/** ---------- SUBROUTES ---------- **/
router.use('/journal', journal);
router.use('/checklist', checklist);
/**
 * GET private/index
 */
router.get('/', function (req, res) {
  // console.log('req.user.journal from index.js in router.get', req.user.journal);
  res.redirect('/'); // they made it!
});

module.exports = router;
