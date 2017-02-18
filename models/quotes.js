var mongoose = require('mongoose');

var quoteSchema = mongoose.Schema({
  quote: String,
});

var Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
