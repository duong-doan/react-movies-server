const Users = require('../models/users');
const { createAccessToken } = require('../utils/helpers');

const authController = {
  login: async (req, res) => {
    try {
      const email = req.body.email;
      const user = await Users.findOne({ email });
      console.log('user', user);
      if (!user) {
        res.status(400).json({ message: 'this email not exist' });
      }
      const accessToken = createAccessToken({ email: user.email });
      res.json({ accessToken });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
