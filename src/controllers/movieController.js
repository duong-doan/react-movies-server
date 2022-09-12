const Movies = require('../models/movies');

const moviesController = {
  getListMovies: async (req, res) => {
    try {
      const moviesList = await Movies.find().limit(20);
      // console.log(moviesList);
      res.json({ moviesList });
      return moviesList;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = moviesController;
