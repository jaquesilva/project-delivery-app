// Responsável por receber as definições de middlewares e rotas da API

const express = require('express');
const cors = require('cors');
const {
  loginRouter,
} = require('../router/index');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', loginRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
