const mongose = require('mongoose');
const Schema = mongose.Schema;

const userSchema = new Schema({
  name: String,
  nick: String,
  about: String,
  user_pic: String,
  online: Number,
});

module.exports = {
  User: mongose.model('User', userSchema)
};