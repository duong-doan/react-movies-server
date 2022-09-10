const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://react-movies-db:qNC0pB4TeAX0f5st@cluster0.nvl6unf.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('connect');
  } catch (error) {
    console.log('fail');
  }
};

module.exports = { connect };
