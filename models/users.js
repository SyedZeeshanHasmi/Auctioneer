var Mongoose = require("mongoose");

var userSchema = new Mongoose.Schema({
    username : "string",
    email : "string",
    password : "string"
});

var User = new Mongoose.model("user", userSchema);


module.exports = User;