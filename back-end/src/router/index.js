const express = require('express');

const loginController = require('../controllers/loginControllers');
const registerController = require('../controllers/registerController');
const customerController = require('../controllers/customerController');
const salesController = require('../controllers/salesController');
const sellerController = require('../controllers/sellerController');
const authMiddleware = require('../middlewares/authMiddleware');

const loginRouter = express.Router();
loginRouter.post('/', loginController.loginUser);

const registerRouter = express.Router();
registerRouter.post('/', registerController.registerUser);

const customerRouter = express.Router();
customerRouter.get('/products', customerController.customerProducts);
customerRouter.get('/orders/:saleId', salesController.customerSalesOrders);
customerRouter.post('/orders', salesController.getByUserId);
customerRouter.post('/checkout', authMiddleware, salesController.customerCheckout);

const sellerRouter = express.Router();
sellerRouter.get('/orders/:id', sellerController.sellerOrders);

module.exports = {
  loginRouter,
  registerRouter,
  customerRouter,
  sellerRouter,
};
