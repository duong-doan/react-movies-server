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
        friend_list: [],
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
      return res.json({ accessToken });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const emailReq = req.body.email;
      const user = await User.findOne({ email: emailReq });
      const { _id, email, friend_list } = user;
      return res.json({ id: _id, email, friend_list });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  searchUser: async (req, res) => {
    try {
      const data = req.body;
      const { searchValue } = data;
      const users = await User.find({
        email: { $regex: `${searchValue}`, $options: 'i' },
      });
      return res.json({ users });
    } catch (error) {
      return res.json({ error });
    }
  },
  getAllUsersPerPage: async (req, res) => {
    try {
      const { page } = req.body;
      const DEFAULT_PER_PAGE = 20;
      const offset = page * DEFAULT_PER_PAGE;
      const users = await User.find().limit(20).skip(offset);
      return res.json({ users });
    } catch (error) {
      return res.json({ error });
    }
  },
};

module.exports = authController;
