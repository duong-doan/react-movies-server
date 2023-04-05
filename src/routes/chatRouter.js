const router = require('express').Router();
const chatController = require('../controllers/chatController');

router.post('/create-room', chatController.createRoomChat);

module.exports = router;
