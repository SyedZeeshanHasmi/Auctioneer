var express = require('express');
var router = express.Router();
var path = require("path");

var publicFolderPath = path.join(__dirname,"../public");

var isAuthenticated = function(req, res, next) {
  if(req.session.userId) {
    req.session.lastRoute = req.originalUrl;
    next();
  } else {
    req.session.lastRoute = req.originalUrl;
    res.redirect("/");
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("index.html", {root: publicFolderPath});
});

router.get('/signup', function(req,res, next) {
  res.sendFile("signup.html", {root: publicFolderPath});
});

router.get('/dashboard',isAuthenticated, function(req,res,next) {

});


router.post('/signIn', function(req,res,next) {

});

router.post('/signUp', function(req, res, next) {

});

router.get("/signOut", function(req, res, next) {

});

module.exports = router;
