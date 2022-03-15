const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');

app.use(express.json());

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

mongoose
    .connect('mongodb://localhost:27017/hit')
    .then(() => {})
    .catch((err) => {
        console.log(err.message);
    });
app.use('/api', userRouter);
app.use('/api', postRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
