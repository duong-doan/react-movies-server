const jwt = require('jsonwebtoken');

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1h',
  });
};

module.exports = { createAccessToken };
