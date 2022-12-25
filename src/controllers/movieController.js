const Movies = require('../models/movies');
const Comment = require('../models/comment');
const ObjectId = require('mongodb').ObjectId;

const moviesController = {
  getListMovies: async (req, res) => {
    try {
      const { page } = req.body;
      const DEFAULT_PER_PAGE = 20;
      const offset = page * DEFAULT_PER_PAGE;
      const moviesList = await Movies.find().limit(20).skip(offset);
      res.json({ moviesList });
      return moviesList;
    } catch (error) {
      return res.json({ error });
    }
  },
  getMovie: async (req, res) => {
    try {
      const { id } = req.body;
      const o_id = new ObjectId(id);
      const movie = await Movies.findOne({ _id: o_id });
      return res.json({ movie });
    } catch (error) {
      return res.json({ error });
    }
  },
  getCommentInMovie: async (req, res) => {
    try {
      const { movie_id } = req.body;
      const o_id = new ObjectId(movie_id);
      const comments = await Comment.find({ movie_id: o_id });
      return res.json({ comments });
    } catch (error) {
      return res.json({ error });
    }
  },
  postCommentInMovie: async (req, res) => {
    try {
      const data = req.body;
      const { name, email, movie_id, text, date } = data;
      const newComment = new Comment({
        name,
        email,
        movie_id,
        text,
        date,
      });
      await newComment.save();
      return res.json({ message: 'Comment success' });
    } catch (error) {
      return res.json({ error });
    }
  },
  searchMovie: async (req, res) => {
    try {
      const data = req.body;
      const { searchValue } = data;
      const moviesSearch = await Movies.find({
        title: { $regex: `${searchValue}`, $options: 'i' },
      });
      return res.json({ movies: moviesSearch });
    } catch (error) {
      return res.json({ error });
    }
  },
};

module.exports = moviesController;
