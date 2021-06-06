import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import axios from 'axios'
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@material-ui/core/Button';
import { Nav, NavbarContainer, NavLogo, LogoN, LogoS, Mobileicon, NavMenu, NavLinksR, NevBtn} from './HeaderStyle'

const Header = ({ toggle }) => {

    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    const logoutUser = async () => {
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = "/";
    }

    const defultRouter = () => {
        return (
            <>
                <NavLinksR to="/">Home</NavLinksR>
                <NavLinksR to="/aboutus">About us</NavLinksR>
                <NavLinksR to="/coursedetails">Courses</NavLinksR>
                <NavLinksR to="/contactus">Contact us</NavLinksR>
            </>
        )
    }

    const adminRouter = () => {
        return (
            <>
                <NavLinksR to="/courses">Add Courses</NavLinksR>
                <NavLinksR to="/contactform">Form Details</NavLinksR>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <Button href="/" variant="contained" style={{ color: "#ffffff", background: "#DAA520" }} onClick={logoutUser}>Logout</Button>
            </>
        )
    }

    return (
        <Nav id='home'>
            <NavbarContainer>
                <NavLogo to='/'>
                    <LogoN>Jeevandip</LogoN>
                    <LogoS>{isAdmin ? 'Admin' : 'Medical Institute'}</LogoS>
                </NavLogo>
                <NavMenu>
                    {
                        isAdmin ? adminRouter() : defultRouter()
                    }
                </NavMenu>
                <NevBtn>
                    {isLogged ? loggedRouter() : <Button href="/login" variant="contained" style={{ color: "#ffffff", background: "#DAA520" }}>Sign in</Button>}
                </NevBtn>
                <Mobileicon>
                    <DehazeIcon onClick={toggle} />
                </Mobileicon>
            </NavbarContainer>
        </Nav>
    )
}

export default Header
