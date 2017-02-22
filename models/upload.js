var mongoose = require('mongoose');

var UploadSchema = mongoose.Schema({
  created: { type: Date},
  file: Object,
  comment: { type: String},
  userId: String
});

module.exports = mongoose.model('Upload', UploadSchema);
