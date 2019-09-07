const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: String,
  timestamp: Number,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = {
  Message: mongoose.model('Message', messageSchema)
};