const router = require('express').Router();
const authController = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/user', verifyToken, authController.getUser);
router.post('/search-user', authController.searchUser);
router.post('/users', authController.getAllUsersPerPage);

module.exports = router;
