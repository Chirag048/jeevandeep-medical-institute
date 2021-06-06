import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    z-index: 1;
    /* border: solid 1px #000000; */
`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    z-index: 1;
    width: 100vw;
    max-width: 1440px;
    background-color: #ffffff;
    position: fixed;
    top: 0px;
    /* border: solid 1px #000000; */
`;

export const NavLogo = styled(LinkR)`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    font-style: bold;
    text-align: center;
    /* border: solid 1px #000000; */

    @media screen and (max-width: 768px){
        padding: 5px;
        width: 50%;
    }
`;

export const LogoN = styled.p`
    width: 100%;
    height: 50%;
    color: #000000;
    font-size: xx-large;
`;

export const LogoS = styled.p`
    width: 100%;
    height: 50%;
    color: #DAA520;
    font-size: larger;
`;

export const NavMenu = styled.ul`
    padding: 20px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    text-align: center;
    /* border: solid 1px #000000; */
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavLinksR = styled(LinkR)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
transition: all 0.3s ease-in-out;
&:hover {
    color: #DAA520;
}
&.active{
    border-bottom: 3px solid blue;;
}
`;


export const NevBtn = styled.nav`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
    display: none;
}
`;

export const Mobileicon = styled.div`
    display: none;
@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
    }
`;