const { default: mongoose } = require("mongoose");

const Userschema = new mongoose.Schema({
  username:String,
  email:String,
  password:String
});

module.exports = mongoose.model('Users1', Userschema);