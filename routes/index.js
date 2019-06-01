var express = require('express');
var router = express.Router();
var path = require("path");
var mongoose = require('mongoose');

var User = require("../models/users");

mongoose.connect('mongodb://localhost/auctioneer', {useNewUrlParser: true});

var publicFolderPath = path.join(__dirname, "../public");
var db = mongoose.connection;

db.once("open", function() {
  console.log("Connected to mongo database");
});
var isAuthenticated = function (req, res, next) {
  if (req.session.userId) {
    req.session.lastRoute = req.originalUrl;
    next();
  } else {
    req.session.lastRoute = req.originalUrl;
    res.redirect("/");
  }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile("index.html", { root: publicFolderPath });
});

router.get('/signup', function (req, res, next) {
  res.sendFile("signup.html", { root: publicFolderPath });
});

router.get('/dashboard', function (req, res, next) {
  res.sendFile("dashboard.html", { root: publicFolderPath });
});


router.post('/signin', function (req, res, next) {
  var userCredentials = req.body;
  var password = userCredentials.password;
  var username = userCredentials.username;

  console.log("Password is ", password);
  console.log("Username is ", username);



  res.send({ success: 1 });
});

router.post('/signup', function (req, res, next) {
  var userCredentials = req.body;
  var email = userCredentials.email;
  var password = userCredentials.password;
  var username = userCredentials.username;

  User.findOne({$or : [{email : email},{username : username}]}).then(function(existingUser) {
    if(existingUser) {
      res.send({success : 0, errorMessage : "Username or email already exists"});
    } else {
      var user = new User({
        email : email,
        username : username,
        password : password
      });
    
      user.save();
      res.send({ success: 1 });
    }
  });
});

router.get("/signOut", function (req, res, next) {

});

module.exports = router;
