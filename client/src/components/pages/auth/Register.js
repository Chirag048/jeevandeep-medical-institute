import React, { useState } from 'react'
import axios from 'axios'
import Signup from './img/Signup.svg'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { LRContiner, LRdiv, LRcoloum1, LRcoloum2, LRContants, LRH1, LRP, LRImg, LRForm, LRH3 } from './LRStyle'

const Register = () => {

    const [user, setUser] = useState({
        name: '', email: '', password: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/register', { ...user })

            localStorage.setItem('firstLogin', true)


            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <LRContiner>
            <LRdiv>
                <LRcoloum1>
                    <LRContants>
                        <LRH3>Already user?</LRH3>
                        <LRP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</LRP>
                        <Button href="/login" variant="contained" style={{ color: "#ffffff", background: "#DAA520" }}>Sign in</Button>
                    </LRContants>
                    <LRImg src={Signup} alt="Signupimg" />
                </LRcoloum1>
                <LRcoloum2>
                    <LRForm onSubmit={registerSubmit}>
                        <LRH1>Sign up</LRH1>
                        <TextField type="text" name="name" required label="Name" placeholder="User" value={user.name} onChange={onChangeInput} autoFocus={true} />
                        <TextField type="email" name="email" required label="Email" placeholder="@gmail.com" value={user.email} onChange={onChangeInput} />
                        <TextField type="password" name="password" required autoComplete="on" label="Password" placeholder="Password" value={user.password} onChange={onChangeInput} />
                        <Button type="submit" variant="contained" style={{ color: "#ffffff", background: "#DAA520", margin: "20px" }} >Sign up</Button>
                    </LRForm>
                </LRcoloum2>
            </LRdiv>
        </LRContiner>
    )
}

export default Register
