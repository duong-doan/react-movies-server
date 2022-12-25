const router = require('express').Router();
const movieController = require('../controllers/movieController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/list-movies', verifyToken, movieController.getListMovies);
router.post('/movie', movieController.getMovie);
router.post('/comments', movieController.getCommentInMovie);
router.post('/post-comment', movieController.postCommentInMovie);
router.post('/search', movieController.searchMovie);

module.exports = router;
