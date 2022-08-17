// Responsável por receber as definições de middlewares e rotas da API

const path = require('path');
const express = require('express');
const cors = require('cors');
const registerController = require('../controllers/registerAdmController');
const {
  loginRouter,
  registerRouter,
  customerRouter,
  sellerRouter,
} = require('../router/index');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/../images')));
app.use('/login', loginRouter); 
app.use('/register', registerRouter);
app.use('/customer', customerRouter);
app.use('/seller', sellerRouter);
app.post('/admRegister', registerController.registerUser);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
