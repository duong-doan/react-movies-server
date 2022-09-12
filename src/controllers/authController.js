const User = require('../models/users');
const { createAccessToken } = require('../utils/helpers');

const authController = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        return res.json({ message: 'email is already exist' });
      }
      const newUser = new User({
        email,
        password,
      });
      await newUser.save();
      return res.json({ message: 'Register user successfull' });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.json({ message: 'this email not exist' });
      }
      const accessToken = createAccessToken({ email: user.email });
      return res.json({ email, accessToken });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
