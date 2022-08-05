const loginServices = require('../services/loginServices');

const loginUser = async (req, res) => {
  // try {
    const { email } = req.body;
    const user = await loginServices.login(email);
    console.log(user)
    if(user === 'Invalid fields'){
      return res.status(404).json({ message: 'não encontrado'});
    }
    return res.status(200).json(user);
  // } catch (error) {
  //   console.log(error)
  // }
};

module.exports = {
  loginUser,
};