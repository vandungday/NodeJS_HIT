const express = require('express')
const router = express.Router()
const courses = require('../database/courses')



router.get('/cource', (req, res) => {
    res.json(courses);
});

router.post('/cource', (req, res) => {
    let newCourse = req.body();
    courses.push(newCourse);
    res.send('Push Course Success');
});

router.put('/cource/:id', (req, res) => {
    let cource = req.body;
    let { id } = req.params;
    res.json(courses);
    let index = courses.findIndex((courses) => id === courses.id);
    if (index === -1) return res.send('Course not exist')
    cources[index].name = cource.name;
    cources[index].year = cource.year;
    res.send('Update Course success');
})

router.delete('/cource/:id', (req, res) => {
    let { id } = req.params;
    let index = courses.findIndex((courses) => id === courses.id);
    if (index === -1) return res.send('Course not exist');
    courses.splice(index, 1);
    res.send('Delete Course Success');
})

module.exports = router;