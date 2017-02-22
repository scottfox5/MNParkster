var mongoose = require('mongoose');

var UploadSchema = mongoose.Schema({
  created: { type: Date},
  file: Object,
  comment: { type: String}
  //userId: Number
});

module.exports = mongoose.model('Upload', UploadSchema);
