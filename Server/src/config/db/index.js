const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/react_movies');
    console.log('connect');
  } catch (error) {
    console.log('fail');
  }
};

module.exports = { connect };
