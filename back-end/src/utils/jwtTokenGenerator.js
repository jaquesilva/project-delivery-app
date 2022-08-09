const { sign, verify } = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '10000000d',
};

const SECRET = process.env.JWT_SECRET || 'app_delivery';

const jwtTokenGenerator = (payload = {}) => sign(payload, SECRET, jwtConfig);

const jwtTokenVerify = (payload) => verify(payload, SECRET);

module.exports = {
  jwtTokenGenerator, 
  jwtTokenVerify,
};
