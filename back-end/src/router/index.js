const express = require('express');

const loginController = require('../controllers/loginControllers');

const loginRouter = express.Router();

loginRouter.post('/', loginController.loginUser);

module.exports = {
  loginRouter,
};
