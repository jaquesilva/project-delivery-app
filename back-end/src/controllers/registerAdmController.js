const registerService = require('../services/registerService');

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const { authorization } = req.headers;
    const newUser = await registerService.create(name, email, password, role, authorization);

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
