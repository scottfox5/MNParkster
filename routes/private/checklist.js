var express = require('express');
var router = express.Router();
var UserJournal = require('../../models/user');

router.get('/', function (req, res) {
  UserJournal.find({"_id" : req.user._id}, function (err, data) {
    console.log('Journal:', data);
    var journalData = data[0].journal;
    console.log('Journal:', journalData);

    // converting array of journal entry objects with property of park into array of parks
    var parksArray = journalData.map(function(item) { return item["park"]; });
    console.log("Park Array:", parksArray);
    parksArray.sort();

    // counting number of each item in parks array and converting to two arrays: one of distinct parks, one of number of visits to each park
    var  count = {};
    parksArray.forEach(function(i) { count[i] = (count[i]||0)+1;  }); // converts array of items to object with distinct item and number of occurences in array
    var parksVisited = Object.keys(count); // puts keys into array
    var parkVisits = Object.values(count); // puts values into array

    // converting two arrays into array of objects with properties of parks and visits
    var checklist = parksVisited.map(function(e,i){return{park:e,visits:parkVisits[i]}});
    console.log('Checklist Objects Array', checklist);
    if (err) {

      res.sendStatus(500);
      return;
    }
    res.send(checklist);
  });


}); // end of get


module.exports = router;
