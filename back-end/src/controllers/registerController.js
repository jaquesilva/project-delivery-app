const registerService = require('../services/registerService');

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const role = 'costumer';
    const newUser = await registerService.create(name, email, password, role);

    if (newUser.message) {
      res.status(409).json({
        message: 'Usuario ja existe',
      });
    }

    return res.status(201).json(newUser);
  } catch (erro) {
    next(erro);
  }
};

module.exports = {
  registerUser,
};
