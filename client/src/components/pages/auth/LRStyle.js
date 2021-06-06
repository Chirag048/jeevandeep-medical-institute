import styled from 'styled-components';

export const LRContiner = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh - 80px;
    max-width: 1440px;
`;

export const LRdiv = styled.div`
    margin: 20px;
    width: 70%;
    height: 70%;
    display: flex;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 1%,
        rgb(250, 249, 249) 100%);
    border: rgb(204, 219, 232) 1px solid;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover{
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    @media screen and (max-width: 1024px){
        flex-direction: column-reverse;
    }
    
    @media screen and (max-width: 425px){
        width: 100%;
        height: 100%;
    }
`;

export const LRcoloum1 = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;      

    @media screen and (max-width: 1024px){
        width: 100%;
        height: 50%;
        justify-content: flex-end
    }
`;

export const LRcoloum2 = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px){
        width: 100%;
        height: 50%;
    }
`;

export const LRContants = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

export const LRH3 = styled.h3`
`;

export const LRP = styled.p`
    margin: 5px 5px 10px 5px;
`;

export const LRImg = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const LRForm = styled.form`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const LRH1 = styled.h1`
    margin: 10px;
`;
