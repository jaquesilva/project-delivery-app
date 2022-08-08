const registerService = require('../services/registerService');

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = await registerService.create(name, email, password, role);

        return res.status(200).json(newUser);

    } catch (erro) {
        next(erro);
    }
};

module.exports = {
    registerUser,
}
