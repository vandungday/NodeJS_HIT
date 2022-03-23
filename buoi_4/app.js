const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');
const authRouter = require('./routes/authRouter');
const authMiddleware = require('./middelwares/authMiddleware');
const codeRouter = require('./routes/codeRouter');
app.use(express.json());

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

mongoose
    .connect('mongodb://localhost:27017/hit')
    .then(() => {
        console.log('connected to database');
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use('/api/user', authMiddleware.authentication, userRouter);
app.use('/api/post', postRouter);
app.use('/api/', authRouter);
app.use('/api/', codeRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
