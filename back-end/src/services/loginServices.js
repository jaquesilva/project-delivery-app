const { User } = require('../database/models/');
const login = async (email) => {
  const loginUser = await User.findOne({ where: { email } });
console.log(loginUser);
  if (!loginUser) {
    return 'Invalid fields';
  }
  return loginUser;
};

module.exports = {
  login,
};
