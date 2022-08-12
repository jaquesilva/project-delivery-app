const loginServices = require('../services/loginServices');

const loginUser = async (req, res) => {
  // try {
    const { email, password } = req.body;
    const token = await loginServices.login(email, password);
    
    if (token === 'Incorrect email or password') {
      return res.status(404).json({ message: 'não encontrado' });
    }
  return res.status(200).json(token);
};

module.exports = {
  loginUser,
};