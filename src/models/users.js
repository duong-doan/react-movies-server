const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  email: String,
  password: String,
  id: ObjectId,
  friend_list: [],
});

module.exports = mongoose.model('User', User);
