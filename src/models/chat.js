const { ObjectId, Map } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Chat = new Schema({
  id: ObjectId,
  userId: String,
  rooms: [],
});

module.exports = mongoose.model('Chat', Chat);
