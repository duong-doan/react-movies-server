const router = require('express').Router();
const movieController = require('../controllers/movieController');

router.get('/list-movies', movieController.getListMovies);

module.exports = router;
