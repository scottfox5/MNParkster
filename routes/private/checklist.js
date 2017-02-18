var express = require('express');
var router = express.Router();
var UserJournal = require('../../models/user');

router.get('/', function (req, res) {
  UserJournal.find({"_id" : req.user._id}, function (err, data) {
    var data = data[0].journal;
    console.log('journal:', data);
    // converting array of journal entry objects with property of park into array of parks
    var parkArray = data.map(function(item) { return item["park"]; });
    console.log(parkArray);
    // function to count number of each item in array
    var  count = {};
    // TODO: make this work
    // function to count number of each item in array
    var  count = {};
    parkArray.forEach(function(i) { count[i] = (count[i]||0)+1;  });
    // eliminating duplicate items in array
    parkArray = parkArray.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });
    console.log('uniqe parks:', parkArray);
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(parkArray);
  });
}); // end of get


// function to count number of each item in array
// var  count = {};
// parkArray.forEach(function(i) { count[i] = (count[i]||0)+1;  });

module.exports = router;
