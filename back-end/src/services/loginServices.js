const { Users } = require('../database/models');

const login = async (email) => {
  const loginUser = await Users.findOne({ where: { email } });

  if (!loginUser) {
    return 'Invalid fields';
  }
  return loginUser;
};

module.exports = {
  login,
};