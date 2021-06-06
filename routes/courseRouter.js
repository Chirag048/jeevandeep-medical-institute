const router = require('express').Router()
const courseCtrl = require('../controllers/courseCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/course')
    .get(courseCtrl.getCourses)
    .post(auth, authAdmin, courseCtrl.createCourse)

router.route('/course/:id')
    .delete(auth, authAdmin, courseCtrl.deleteCourse)
    .put(auth, authAdmin, courseCtrl.updateCourse)


module.exports = router