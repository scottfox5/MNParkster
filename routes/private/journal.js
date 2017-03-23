var express = require('express');
var router = express.Router();
var UserJournal = require('../../models/user');

router.get('/', function (req, res) {
  UserJournal.find({"_id" : req.user._id}, function (err, data) {
    data = data[0].journal;
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(data);
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

router.put('/:id', function (req, res) {
  var userId = req.user._id;
  var journalEntryId = req.params.id;
  var journalUpdate = req.body;
  // console.log('user id:', userId, 'document id:', journalEntryId, 'journal update:', journalUpdate);
  UserJournal.findOneAndUpdate(
    { "_id": userId, "journal._id": journalEntryId },
    { "$set": { "journal.$": journalUpdate}},
    function (err) {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(204);
  });
}); // end of put

router.delete('/:id', function (req, res) {
  var journalEntryId = req.params.id;
  var userId = req.user._id;
  // console.log('user id:', userId, 'journal entry id:', journalEntryId);
  UserJournal.findById(userId, function(err, user){
    user.journal.id(journalEntryId).remove();
    user.save(function(err){
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(204);
    });
  });
});// end of delete

module.exports = router;
