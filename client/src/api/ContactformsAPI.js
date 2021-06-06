import { useState, useEffect } from 'react'
import axios from 'axios'

function ContactformsAPI(token) {
    const [contactforms, setContactforms] = useState([])
    const [callback, setCallback] = useState(false)
    const [courses, setCourses] = useState('')

    useEffect(() => {
        if (token) {
            const getContactforms = async () => {
                try {
                    const res = await axios.get(`/api/contactform/`, {
                        headers: { Authorization: token }
                    })
                    setContactforms(res.data)
                } catch (err) {
                    
                }
            }
            getContactforms()
        }

    }, [callback, token])

    return {
        contactforms: [contactforms, setContactforms],
        callback: [callback, setCallback],
        courses: [courses, setCourses],
    }
}

export default ContactformsAPI