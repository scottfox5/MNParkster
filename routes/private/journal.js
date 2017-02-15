var express = require('express');
var router = express.Router();
var UserJournal = require('../../models/user');

router.get('/', function (req, res) {
  // console.log("current user, journal route", req.user);
  UserJournal.find({"_id" : req.user._id}, function (err, userjournalEntries) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(userjournalEntries);
  });
}); // end of get

router.post('/', function (req, res) {
  console.log('post req.body:', req.body);
  var userJournalEntry = req.body;
  var user = req.user;
  console.log('posting user journal:', userJournalEntry, "user:", user);
  UserJournal.findByIdAndUpdate(
          user._id,
          {$push: {"journal": userJournalEntry}},
          {safe: true, upsert: true, new : true},
          function (err) {
            if (err) {
              console.log('Error saving', err);
              res.sendStatus(500);
              return;
            }
            res.sendStatus(201);
          }
      )
}); // end of post


//////// IT WORKS!!!!!!
// router.post('/', function (req, res) {
//   console.log('post req.body:', req.body);
//   var userJournalEntry = req.body;
//   var user = req.user;
//   console.log('posting user journal:', userJournalEntry, "user:", user);
//   UserJournal.findByIdAndUpdate(
//           user._id,
//           {$push: {"journal": userJournalEntry}},
//           {safe: true, upsert: true, new : true},
//           function(err, model) {
//               console.log(err);
//           }
//       )
// }); // end of post



router.put('/:id', function (req, res) {
  var id = req.params.id;
  console.log('id received', id, 'data:', req.body);
  UserJournal.findByIdAndUpdate(id, req.body, function (err) {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(204);
  });
}); // end of put

router.delete('/:id', function (req, res) {
  var id = req.params.id;
  console.log('id received', id);
  UserJournal.findByIdAndRemove(id, function (err) {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(204);
  });
}); // end of delete

module.exports = router;
