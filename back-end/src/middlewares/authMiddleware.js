const jwt = require('../utils/jwtTokenGenerator');

const validateTokenMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.jwtTokenVerify(token);

    // if (!decoded) return res.status(401).json({ message: 'Token must be a valid token' });

    // return decoded;
  } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    next();
};

module.exports = validateTokenMiddleware;