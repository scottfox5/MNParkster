var express = require('express');
var router = express.Router();
var fs = require('fs');
var Upload = require('../models/upload');
var multer = require('multer');

var multerS3 = require('multer-s3');
var aws = require('aws-sdk');
var s3 = new aws.S3();

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,//alternately, if you are not using a .env file you can just use a string for the name of your bucket here, 'your-bucket-name'
    acl: 'public-read',//default is private, set to public-read is so the public can view your pictures
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })

});

//upload.single('file') is the line that uploads to AWS, the rest is MongoDB
router.post('/', upload.single('file'), function(req, res) {
  console.log('Post request user:', req.user)
  var newUpload = {
    created: Date.now(),
    file: req.file,
    comment: req.body.comment,
    userId: req.user._id
  };
  Upload.create(newUpload, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send(newUpload);
    }
  });
});

//gets all the uploads recorded in the database
router.get('/', function (req, res) {
  var userId = req.user._id;
  console.log('Get Request user:', userId);
  Upload.find({"userId" : userId}, function (err, data) {
    console.log("Get photo data:", data)
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(data);
  });
 });

module.exports = router;
