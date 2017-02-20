var express = require('express');
var router = express.Router();
var QuoteBook = require('../../models/quotes');

  router.get('/', function (req, res) {
    QuoteBook.find({}, function (err, data) {
      var quoteArray = data[0].quotes;
      // selecting random item from array
      var quote = quoteArray[Math.floor(Math.random()*quoteArray.length)];
      // console.log('Quote:', quote)
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.send(quote);
    });
  }); // end of get

module.exports = router;
