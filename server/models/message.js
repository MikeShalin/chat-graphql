const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: { createdAt: 'createdAt' }});

module.exports = {
  Message: mongoose.model('Message', messageSchema)
};