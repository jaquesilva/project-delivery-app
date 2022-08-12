const { sign, verify } = require('jsonwebtoken');
const fs = require('fs');

const jwtConfig = {
  expiresIn: '10000000d',
};
// https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-node-js-2/
const jwtKey = fs.readFileSync('./jwt.evaluation.key', 'utf8');
// Foi necessário mudar jwt devido ao fato de estar ocorrendo token inválido.

const jwtTokenGenerator = (payload = {}) => sign(payload, jwtKey, jwtConfig);

const jwtTokenVerify = (token) => verify(token, jwtKey);

module.exports = {
  jwtTokenGenerator,
  jwtTokenVerify,
};
