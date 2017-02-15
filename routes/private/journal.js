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

// error handling of code found on stack overflow
// function(err, model) {
//     console.log(err);
// }

// router.put('/:id', function (req, res) {
//   var id = req.params.id;
//   var journalUpdate = req.body
//   var user = req.user
//   console.log('document id:', id, 'journal update:', journalUpdate);
//   UserJournal.findByIdAndUpdate(id, {$set: {park: journalUpdate.park}}, {new: true}, function (err, journal) {
//       if (err) {
//         res.sendStatus(500);
//         return;
//       }
//       res.send(journal).status(204);
//       })
//   });
// // }); // end of put

// Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, { new: true }, function (err, tank) {
//   if (err) return handleError(err);
//   res.send(tank);
// });

router.put('/:id', function (req, res) {
  var userId = req.user._id;
  var journalId = req.params.id;
  var journalUpdate = req.body;
  console.log(req.user.journal[0].notes)
  console.log('user id:', userId, 'document id:', journalId, 'journal update:', journalUpdate);
  UserJournal.findOneAndUpdate(
    { "_id": userId, "journal._id": journalId },
    { "$set": { "journal.$": journalUpdate}
    },
    function (err) {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(204);
  });
}); // end of put

// Folder.findOneAndUpdate(
//     { "_id": folderId, "permissions._id": permission._id },
//     {
//         "$set": {
//             "permissions.$": permission
//         }
//     },
//     function(err,doc) {
//
//     }
// );

// /// Almost Works!!!!!
// router.put('/:id', function (req, res) {
//   var id = req.params.id;
//   var journalUpdate = req.body
//   console.log('document id:', id, 'journal update:', journalUpdate);
//   UserJournal.findByIdAndUpdate(id, journalUpdate, function (err) {
//       if (err) {
//         res.sendStatus(500);
//         return;
//       }
//       res.sendStatus(204);
//   });
// }); // end of put

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
