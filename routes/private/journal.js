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
  var userjournal = new UserJournal(req.body);
  console.log('posting user journal:', userjournal);
  userjournal.save(function (err) {
    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  });
}); // end of post

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
