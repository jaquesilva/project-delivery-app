const User = require('../database/models/users');

const login = async (email) => {
  const loginUser = await User.findOne({ where: { email } });
console.log(loginUser);
  if (!loginUser || undefined) {
    return 'Invalid fields';
  }
  return loginUser;
};

module.exports = {
  login,
};