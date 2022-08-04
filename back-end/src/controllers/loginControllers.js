const loginServices = require('../services/loginServices');

const loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await loginServices.login(email);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
};