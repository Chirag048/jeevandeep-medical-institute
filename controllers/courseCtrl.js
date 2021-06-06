const Course = require('../models/courseModel')

const courseCtrl = {
    getCourses: async(req, res) =>{
        try {
            const courses = await Course.find()
            res.json(courses)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCourse: async (req, res) =>{
        try {
            // if user have role = 1 ---> admin
            // only admin can create , delete and update course
            const {name} = req.body;
            const course = await Course.findOne({name})
            if(course) return res.status(400).json({msg: "This course already exists."})

            const newCourse = new Course({name})

            await newCourse.save()
            res.json({msg: "Created a course"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteCourse: async(req, res) =>{
        try {
            await Course.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Course"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateCourse: async(req, res) =>{
        try {
            const {name} = req.body;
            await Course.findOneAndUpdate({_id: req.params.id}, {name})

            res.json({msg: "Updated a Course"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = courseCtrl