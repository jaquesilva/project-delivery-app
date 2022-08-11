const express = require('express');

const loginController = require('../controllers/loginControllers');
const registerController = require('../controllers/registerController');
const customerController = require('../controllers/customerController');
const salesController = require('../controllers/salesController');

const loginRouter = express.Router();
loginRouter.post('/', loginController.loginUser);

const registerRouter = express.Router();
registerRouter.post('/', registerController.registerUser);

const customerRouter = express.Router();
customerRouter.get('/products', customerController.customerProducts);
customerRouter.get('/orders/:id', salesController.customerSalesOrders);

module.exports = {
  loginRouter,
  registerRouter,
  customerRouter,
};
