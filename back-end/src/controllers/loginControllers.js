const loginServices = require('../services/loginServices');

const loginUser = async (req, res) => {
  // try {
    const { email, password } = req.body;
    // const user = await loginServices.login(email);
    const token = await loginServices.login(email, password);
    
    if (token === 'Incorrect email or password') {
      return res.status(404).json({ message: 'não encontrado' });
    }
    // if (user === 'Invalid fields' || user === undefined) {
    //   return res.status(404).json({ message: 'não encontrado' });
    // }
    // return res.status(200).json(user);
  // } catch (error) {
  //   return res.status(404).json({ message: 'não encontrado' });
  // }
  return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};