const md5 = require('md5');
const { User } = require('../database/models');

const create = async (name, email, password, role) => {
  const newPass = md5(password);
  const verifyUser = await User.findOne({
    where: { email, password: newPass },
  });

  if (!verifyUser) {
    const user = await User.create({ name, email, password: newPass, role });
    return user;
  }
  return { message: 'Usuário já existe' };
};

module.exports = {
  create,
};
