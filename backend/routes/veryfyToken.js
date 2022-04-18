const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(400).send('error, invalid token');
        }
       
        req.user = decoded;
        next();
    });
  } catch (err) {
    return res.status(400).send('Invalid token');
  }
};

module.exports = auth;
