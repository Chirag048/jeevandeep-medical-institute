import styled from 'styled-components';

export const CourseContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100vw;
    height: 100%;    
    max-width: 1440px;
`;

export const CourseH1 = styled.h1`
    margin: 10px;
`;

export const Coursediv = styled.div`
    width: 70%;
    height: auto;
    display: flex;

    @media screen and (max-width: 1024px){
        width: 70%;
        height: 70%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
    @media screen and (max-width: 425px){
        width: 100%;
        height: 100%;
    }
`;

export const Coursecol = styled.div`
        padding: 10px;
        width: 50%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-direction: column-reverse;  

        @media screen and (max-width: 1024px){
        width: 100%;
        height: auto;
        }
`;

export const Courseform = styled.form`
        padding: 10px;
        width: 50%;
        height: fit-content;
        display: flex;
        justify-content: center;   

        @media screen and (max-width: 1024px){
        width: 100%;
        height: auto;
        }
`;

export const CourseOutput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CourseH3 = styled.p`
    width: 40%;
    overflow: hidden;
    font-size: larger;
`;

