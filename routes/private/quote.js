var express = require('express');
var router = express.Router();
var QuoteBook = require('../../models/quotes');

  router.get('/', function (req, res) {
    console.log('quote route hit')
    QuoteBook.find({}, function (err, data) {
      console.log('Data:', data);
      var quoteArray = data[0].quotes;
      console.log('Quote Array:', quoteArray);
      var quote = quoteArray[Math.floor(Math.random()*quoteArray.length)];
      console.log('Quote:', quote)
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.send(quote);
    });
  }); // end of get

module.exports = router;
