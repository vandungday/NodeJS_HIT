const mongoose = require('mongoose');

const courceSchema = new mongoose.Schema({
    name: String,
    teacher: String,
    year: Number,
})

const Course = mongoose.model('Course', courceSchema);

module.exports = Course;