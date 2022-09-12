const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  num_mflix_comments: Number,
  title: String,
  fullplot: String,
  countries: [String],
  released: Date,
  directors: [String],
  writers: [String],
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: String,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numbReviews: Number,
      meter: Number,
    },
    lastUpdated: String,
  },
});

module.exports = mongoose.model('Movie', Movie);
