import React, { useState, useContext } from 'react'
import axios from 'axios'
import "aos/dist/aos.css"
import { GlobalState } from '../../../GlobalState'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { CFContiner, CFdiv, CFcol1, CFH1, CFcol2, CFdiv2 } from './ContactFormStyle'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    course: '',
    message: '',
    _id: ''
}

const ContactForm = () => {

    const state = useContext(GlobalState)
    const [contactform, setContactform] = useState(initialState)
    const [courses] = state.coursesAPI.courses
    const [callback, setCallback] = state.contactformsAPI.callback
    const [token] = state.token

    const TextFieldStyle = {
        margin: "5px",
    };

    const onChangeInput = e => {
        const { name, value } = e.target;
        setContactform({ ...contactform, [name]: value })
    }

    const handleUpload = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/contactform', { ...contactform }, {
                headers: { Authorization: token }
            })
            setCallback(!callback)
            alert(res.data.msg)

            window.location.href = "/";

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <CFContiner>
            <CFdiv data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <CFcol1>
                    <iframe title="location_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14880.0250304279!2d72.86183332962436!3d21.191910374561942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f973013158f%3A0xfde27114ff3f5040!2sJeevandeep%20medical%20institute!5e0!3m2!1sen!2sin!4v1622731591245!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy"></iframe>
                </CFcol1>
                <CFcol2 onSubmit={handleUpload}>
                    <CFH1>Application Form</CFH1>
                    <CFdiv2>
                        <TextField type="text" required label="First Name" placeholder="Name" name="firstName" value={contactform.firstName} onChange={onChangeInput} style={TextFieldStyle} />
                        <TextField type="text" required label="Last Name" placeholder="Sarname" name="lastName" value={contactform.lastname} onChange={onChangeInput} style={TextFieldStyle} />
                    </CFdiv2>
                    <CFdiv2>
                        <TextField type="email" label="Email" placeholder="@gmail.com" name="email" value={contactform.email} onChange={onChangeInput} style={TextFieldStyle} />
                        <TextField type="number" required label="Phone Number" placeholder="9327084494" name="number" value={contactform.number} onChange={onChangeInput} style={TextFieldStyle} />
                    </CFdiv2>
                    <CFdiv2>
                        <FormControl>
                            <InputLabel>Course</InputLabel>
                            <Select name="course" value={contactform.course} onChange={onChangeInput}>
                                {
                                    courses.map(course => (
                                        <MenuItem value={course.name} key={course._id}>{course.name}</MenuItem>
                                    ))
                                }
                            </Select>
                            <FormHelperText>Chosse Course</FormHelperText>
                        </FormControl>
                        <TextField type="text" multiline rowsMax={2} label="Message" placeholder="Your Message" name="message" value={contactform.message} onChange={onChangeInput} style={TextFieldStyle} />
                    </CFdiv2>
                    <Button type="submit" variant="contained" style={{ color: "#ffffff", background: "#DAA520", margin: "20px" }}>Apply Now</Button>
                </CFcol2>
            </CFdiv>
        </CFContiner>
    )
}

export default ContactForm
