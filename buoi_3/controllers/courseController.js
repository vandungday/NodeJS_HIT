
const Course = require('../models/courseModel');
class CourseController {

    async get(req, res) {
        res.json(await Course.find());
    }

    async getID(req, res) {
        res.json(await Course.findById(id));
    }

    async post(req, res) {
        res.json(await Course.create(req.body));
    }

    async put(req, res) {
        let { id } = req.params;
        res.json(await Course.findByIdAndUpdate(id, req.body));
    }

    async delete(req, res) {
        let { id } = req.params;
        const courseDelete = await Course.findByIdAndDelete(id);
        res.json(null);
    }
}

module.exports = new CourseController;