const userRouter = require('./userRouter');
const authRouter = require('./authRouter');

const authMiddleware = require('../middelwares/authMiddleware');

module.exports = (app) => {
    app.use('/api/', authRouter);

    app.use('/api/users', userRouter);
};
