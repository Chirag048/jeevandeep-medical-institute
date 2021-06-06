import {useState, useEffect} from 'react'
import axios from 'axios'

function CoursesAPI() {
    const [courses, setCourses] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getCourses = async () =>{
            const res = await axios.get('/api/course')
            setCourses(res.data)
        }

        getCourses()
    },[callback])
    return {
        courses: [courses, setCourses],
        callback: [callback, setCallback]
    }
}

export default CoursesAPI