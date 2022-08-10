const md5 = require('md5');
const { User } = require('../database/models');
const jwt = require('../utils/jwtTokenGenerator');

const login = async (email, password) => {
  const comparePassword = md5(password);
  const loginUser = await User.findOne({ where: { email, password: comparePassword } });
  
if (!loginUser) { 
    return 'Incorrect email or password';
  }
  


  const token = jwt.jwtTokenGenerator({ loginUser });
  return token;
};

module.exports = {
  login,
};
