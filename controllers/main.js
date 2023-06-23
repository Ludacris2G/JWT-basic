const { BadRequestError } = require('../errors');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body;
    
    // mongoose validation
    // Joi
    // check in the controller
    
    if (!username || !password) {
        throw new BadRequestError('Please provide email and passowrd');
    }

    // normally provided by DB
    const id = new Date().getDate();

    // keep payload small for a better experience
    const token = jwt.sign(
        { id, username }, 
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    );

    res.status(StatusCodes.OK).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);

    res
        .status(StatusCodes.OK)
        .json({ 
            msg: `Hello, ${req.user.username}`, 
            secret: `Here is your authorized data, your lucky number is ${luckyNumber}` 
        });
};

module.exports = {
    login,
    dashboard
};
