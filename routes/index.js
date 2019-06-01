var express = require('express');
var router = express.Router();
var path = require("path");

var publicFolderPath = path.join(__dirname,"../public");

var isSignedInMiddleware = function(req, res, next) {
  next();
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("index.html", {root: publicFolderPath});
});


router.get('/dashboard', function(req,res,next) {
  res.sendFile("dashboard.html",{root : publicFolderPath});
});


router.post('/signIn', function(req,res,next) {

});

router.post('/signUp', function(req, res, next) {

});

router.get("/signOut", function(req, res, next) {

});

module.exports = router;
