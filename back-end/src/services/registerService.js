const { User } = require('../database/models');

const create = async (name, email, password, role) => {

    const verifyUser = await User.findOne({ where: { email } });

    if (!verifyUser) {
        const user = await User.create(name, email, password, role);
        //return 'User created';
        return user; 
    }
    return verifyUser;
    //return 'User already exists';
};

module.exports = {
    create,
}