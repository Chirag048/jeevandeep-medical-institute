import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 1;
width: 100vw;
height: 100vh;
background: #ffffff;
display: none;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

@media screen and (max-width: 768px){
    display: grid;
}
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color: #000000;
`;

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6,60px);
}
`;

export const SidebarLink = styled(LinkR)`
text-decoration: none;
display: none;
color: #000000;
@media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
}
`;

export const SideBtnWrap = styled.div`
display: none;
@media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
}
`;