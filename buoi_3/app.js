const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./routes/userRoute');
const courceRouter = require('./routes/courseRoute')
const mongoose = require('mongoose');

app.use(express.json());

mongoose
    .connect('mongodb://localhost:27017/hit-nodejs')
    .then(() => {
        app.use('/', userRouter)
        app.use('/', courceRouter)

    })
    .catch((err) => {
        console.log(err.message);
    })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


