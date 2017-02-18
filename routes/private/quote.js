var express = require('express');
var router = express.Router();
var QuoteBook = require('../../models/quotes');

  router.get('/', function (req, res) {
    QuoteBook.find({}, function (err, data) {
      console.log('Quote Array:', quoteArray);
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.send(quoteArray);
    });
  }); // end of get

module.exports = router;
