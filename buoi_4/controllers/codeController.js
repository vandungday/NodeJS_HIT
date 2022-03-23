const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const asyncHandle = require('../utils/asyncHandle');

const encode = asyncHandle(async (req, res) => {
    const { text } = req.body;
    const code = jwt.sign({ text }, 'vandungday', {
        expiresIn: '1h',
    });
    res.status(200).json({
        message: 'Encoded succesfully',
        convert: code,
    });
});

const decode = asyncHandle(async (req, res) => {
    const decode = req.headers.authorization.split('Bearer ')[1];
    // console.log(jwt.verify(decode, 'vandungday'));
    res.status(200).json({
        message: 'Decoded succesfully',
        data: jwt.verify(decode, 'vandungday'),
    });
});

module.exports = { encode, decode };
