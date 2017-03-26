var express = require('express');
var router = express.Router();
var QuoteBook = require('../../models/quotes');

  router.get('/', function (req, res) {
    QuoteBook.find({}, function (err, data) {
      console.log("Quote Data:", data)
      if (data.length == 0){
        res.sendStatus(500)
        return
      } else {
        var quoteArray = data[1].quotes;
        console.log("Quote Array:", quoteArray);
        
        // selecting random item from array
        var quote = quoteArray[Math.floor(Math.random()*quoteArray.length)];
        console.log('Quote:', quote)
        res.send(quote);
        return
      }
      if (err) {
        res.sendStatus(500);
        return;
      }

    });
  }); // end of get

module.exports = router;
