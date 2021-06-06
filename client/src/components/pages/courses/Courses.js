import React, { useState, useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { CourseContainer, CourseH1, Coursediv, Courseform, Coursecol, CourseOutput, CourseH3 } from './CoursesStyle'

const Courses = () => {

    const state = useContext(GlobalState)
    const [courses] = state.coursesAPI.courses
    const [course, setCourse] = useState('')
    const [token] = state.token
    const [callback, setCallback] = state.coursesAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    const createCourse = async e => {
        e.preventDefault()
        try {
            if (onEdit) {
                const res = await axios.put(`/api/course/${id}`, { name: course }, {
                    headers: { Authorization: token }
                })
                alert(res.data.msg)
            } else {
                const res = await axios.post('/api/course', { name: course }, {
                    headers: { Authorization: token }
                })
                alert(res.data.msg)
            }
            setOnEdit(false)
            setCourse('')
            setCallback(!callback)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const editCourse = async (id, name) => {
        setID(id)
        setCourse(name)
        setOnEdit(true)
    }

    const deleteCourse = async id => {
        try {
            const res = await axios.delete(`/api/course/${id}`, {
                headers: { Authorization: token }
            })
            alert(res.data.msg)
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <CourseContainer>
            <CourseH1>Courses</CourseH1>
            <Coursediv>
                <Courseform onSubmit={createCourse}>
                    <TextField type="text" name="name" required label="Add New Course" placeholder="CourseName" autoFocus={true} value={course} onChange={e => setCourse(e.target.value)} />
                    <Button variant="contained" type="submit" style={{ color: "#ffffff", background: "#DAA520", margin: "10px" }}>{onEdit ? "Update" : "Create"}</Button>
                </Courseform>
                <Coursecol>
                    {
                        courses.map(course => (
                                <CourseOutput key={course._id}>
                                    <CourseH3>{course.name}</CourseH3>
                                    <Button variant="contained" style={{ color: "#ffffff", background: "#DAA520", margin: "10px" }} onClick={() => editCourse(course._id, course.name)}>Edit</Button>
                                    <Button variant="contained" style={{ color: "#ffffff", background: "#DAA520", margin: "10px" }} onClick={() => deleteCourse(course._id)}>Delete</Button>
                                </CourseOutput>
                        ))
                    }
                </Coursecol>
            </Coursediv>
        </CourseContainer>
    )
}

export default Courses
