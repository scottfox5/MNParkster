var mongoose = require('mongoose');

var quoteSchema = mongoose.Schema({
  quotes: Array
});

var Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
