import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import Register from './auth/Register'
import Login from './auth/Login'
import Courses from './courses/Courses'
import ContactForm from './contactform/ContactForm'
import Home from './home/Home'
import Aboutus from './aboutus/Aboutus'
import CourseDetails from './coursedetails/Coursedetails'
import ContactUs from './contactus/ContactUs'
import ContactformDetails from './contactformdetails/ContactformDetails'

const Pages = () => {

    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const [isLogged] = state.userAPI.isLogged

    return (
        <Switch>
            <Route path="/login" exact component={isLogged ? Home : Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/applyform" exact component={ContactForm} />

            <Route path="/courses" exact component={isAdmin ? Courses : Home}/>
            <Route path="/contactform" exact component={isAdmin ? ContactformDetails : Home}/>
            
            <Route path="/" exact component={Home} />
            <Route path="/aboutus" exact component={Aboutus} />
            <Route path="/coursedetails" exact component={CourseDetails} />
            <Route path="/contactus" exact component={ContactUs} />
        </Switch>
    )
}

export default Pages
