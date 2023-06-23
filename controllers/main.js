const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body;
    
    // mongoose validation
    // Joi
    // check in the controller
    
    if (!username || !password) {
        throw new CustomAPIError('Please provide email and passowrd', 400);
    }

    // normally provided by DB
    const id = new Date().getDate();

    // keep payload small for a better experience
    const token = jwt.sign({ id, username });

    console.log(username, password);
    res.send('Fake Login/Register/Signup');
};

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Hello, John Does`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}` });
};

module.exports = {
    login,
    dashboard
};
