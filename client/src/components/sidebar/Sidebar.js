import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap} from './SiderbarStyle'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="/aboutus" onClick={toggle}>About us</SidebarLink>
                    <SidebarLink to="/coursedetails" onClick={toggle}>Courses</SidebarLink>
                    <SidebarLink to="/contactus" onClick={toggle}>Contact us</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <Button href="/login" variant="contained" style={{color: "#ffffff", background: "#DAA520"}} onClick={toggle}>Sign in</Button>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
