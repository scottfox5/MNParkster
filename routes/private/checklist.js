var express = require('express');
var router = express.Router();
var UserJournal = require('../../models/user');

router.get('/', function (req, res) {
  UserJournal.find({"_id" : req.user._id}, function (err, data) {
    var data = data[0].journal;
    console.log('journal:', data)
    var parkArray = data.map(function(item) { return item["park"]; });
    console.log(parkArray);
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

module.exports = router;
