const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];
  console.log('token middle', token);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorize' });
  }

  try {
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log('decode', decode);
    next();
  } catch (error) {
    return res.sendStatus(403);
  }
};

module.exports = { verifyToken };
