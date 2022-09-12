const router = require('express').Router();
const movieController = require('../controllers/movieController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/list-movies', verifyToken, movieController.getListMovies);

module.exports = router;
