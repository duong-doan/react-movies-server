const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  name: String,
  email: String,
  movie_id: ObjectId,
  text: String,
  date: Date,
});

module.exports = mongoose.model('Comment', Comment);
