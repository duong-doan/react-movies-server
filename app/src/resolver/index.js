const moviesController = require('../controllers/movieController');

const resolver = {
  // type query
  Query: {
    movies: async () => await moviesController.getListMovies(),
  },
};

module.exports = resolver;
