const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  nick: String,
  about: String,
  user_pic: String,
  online: Number,
  login: String,
  password: String,
});

module.exports = {
  User: mongoose.model('User', userSchema)
};