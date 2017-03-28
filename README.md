# MN State Park Online Journal

This is a MEAN stack web based application for users to journal their experiences in MN State Parks and keep track of parks visited. This application allows users to log in with their google account, then create, read, update, and delete their personal journal entries. Moreover, this application allows users to upload their photographs, which are then stored on AWS. Also, users can easily obtain an eight day weather forecast for any state park.

## Author: Scott Fox

## URL: https://mn-parkster.herokuapp.com/

## Date: 25 February 2017

### Technology used:

- HTML5
- CSS3
- Bootstrap
- JavaScript
- AngularJS
- Node.js
- Express
- MongoDB
- Mongoose
- Passport - Google Authentication
- Amazon Web Services: S3 (image hosting)
- Dark Sky Weather API
- Google Maps API

### Setup:
- Install node.js and mongoDB
- Clone the repo
- Change names of the files in config folder to auth.js and database.js (simply remove the underscore from current file names)
- Edit auth.js file with your googleAuth information and edit database.js file with your database location
- Change name of .env file (simply remove the underscore) and edit file with proper values for AWS S3 image hosting
- Be sure to put your auth.js, database.js, and .env files in your .gitignore file
- npm install
- Run application on localhost:5555
