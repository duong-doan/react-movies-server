// const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = await req.header('Authorization');
    const token = (await authHeader) && authHeader.split(' ')[1];
    console.log('token', token);
    if (!token) {
      return res.status(401).json({ message: 'Unauthorize' });
    }
    // const decode = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log('decode', decode);
    next();
    console.log('xun day');
  } catch (error) {
    return res.sendStatus(403);
  }
};

module.exports = { verifyToken };
