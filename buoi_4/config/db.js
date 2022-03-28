const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb://localhost:27017/hit', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;
