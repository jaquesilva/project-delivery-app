const express = require('express');

const loginController = require('../controllers/loginControllers');
const registerController = require('../controllers/registerController');

const loginRouter = express.Router();
loginRouter.post('/', loginController.loginUser);

const registerRouter = express.Router();
registerRouter.post('/', registerController.registerUser);

module.exports = {
  loginRouter,
  registerRouter,
};
