import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Aos from 'aos'
import "aos/dist/aos.css"
import Signup from './img/Signup.svg'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { LRContiner, LRdiv, LRcoloum1, LRcoloum2, LRContants, LRH1, LRP, LRImg, LRForm, LRH3 } from './LRStyle'

const Login = () => {

    const [user, setUser] = useState({
        email: '', password: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/login', { ...user })

            localStorage.setItem('firstLogin', true)

            window.location.href = "/";

        } catch (err) {
            alert(err.response.data.msg);
        }
    }

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <LRContiner>
            <LRdiv data-aos="zoom-out-up">
                <LRcoloum1>
                    <LRContants>
                        <LRH3>Students</LRH3>
                        <LRP>Are you looking for how to contact us?</LRP>
                        <Button href="/contactus" variant="contained" style={{ color: "#ffffff", background: "#DAA520" }}>Apply Now</Button>
                    </LRContants>
                    <LRImg src={Signup} alt="Signupimg" />
                </LRcoloum1>
                <LRcoloum2>
                    <LRForm onSubmit={loginSubmit}>
                        <LRH1>Sign in</LRH1>
                        <TextField type="email" name="email" required label="Email" placeholder="@gmail.com" value={user.email} onChange={onChangeInput} autoFocus={true} style={{ color: "#DAA520" }} />
                        <TextField type="password" name="password" required autoComplete="on" label="Password" placeholder="Password" value={user.password} onChange={onChangeInput} />
                        <Button type="submit" variant="contained" style={{ color: "#ffffff", background: "#DAA520", margin: "20px" }}>Sign in</Button>
                    </LRForm>
                </LRcoloum2>
            </LRdiv>
        </LRContiner>
    )
}

export default Login
