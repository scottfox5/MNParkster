var express = require('express');
var router = express.Router();

var request = require('request');
var rp = require('request-promise');

var APIkey = '76ab6f89fd9a267b2e0ed5487a060069/';
var darkskyUrl = 'https://api.darksky.net/forecast/';

//Querying the API
router.get('/:location', function(req, res) {
  console.log('Weather router connected!', req.params.location)
  var location = req.params.location
  var options = {
    url: darkskyUrl + APIkey + location,
  }
  rp(options, function(error, response, body) {
     console.log('options being passed to API: ', options);
  }).then(function(body) {
    res.send(body);
  });

});

module.exports = router;




//
