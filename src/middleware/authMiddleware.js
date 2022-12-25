const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  const authHeader = await req.header('Authorization');
  const token = await (authHeader && authHeader.split(' ')[1]);
  if (!token) {
    return res.status(401);
  }
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (error) {
    return res.json({ errors: { message: 'Unauthorize', status: 403 } });
  }
};

module.exports = { verifyToken };
