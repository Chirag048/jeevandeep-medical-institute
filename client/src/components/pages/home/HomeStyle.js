import styled from 'styled-components';

export const HContiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1440px;

    @media screen and (max-width: 768px){
        width: 100vw;
        height: 100vh - 80px;
    }
`;

export const HSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
    
    @media screen and (max-width: 425px){
        width: 100%;
        height: 100%;
    }
`;

export const Hcol = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 50%;
    }
`;

export const HContent1 = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;

    @media screen and (max-width: 768px){
        align-items: center;
        text-align: center;
        width: 100%;
        height: 50%;
    }
`;

export const HP1 = styled.p`
    color: #DAA520;
    font-weight: 400;
    padding: 5px;
`;

export const HH1 = styled.h1`
    padding: 5px;
`;

export const HP2 = styled.p`
    padding: 5px;
`;

export const Hdiv = styled.div`
    margin-top: 5px;
    width: 100%;
    display: flex;

    @media screen and (max-width: 768px){
        justify-content: center;
        align-items: center;
    }
`;

export const HImg = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const HSection2 = styled.section`
    margin: 20px 0px 20px 0px;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Hrow1 = styled.div`
    margin: 10px;
    width: 50%;
    text-align: center;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const HH12 = styled.h1`
    padding: 10px;
`;

export const HP3 = styled.p`
    padding: 10px;
`;

export const Hrow2 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const HCardcol = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const HCard = styled.div`
    width: 70%;
    padding: 10px;
    margin: 10px;
    display: flex;
    border-radius: 40px;
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

    @media screen and (max-width: 768px){
        padding: 0;
        width: 100%;
    }
`;

export const Avatardiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

export const HCarddiv = styled.div`
    margin: 10px;

    @media screen and (max-width: 768px){
        margin: 0;
    }
`;

export const HCardH3 = styled.h3`
    padding: 5px;
`;

export const HCardP = styled.div`
    padding: 5px;
`;

export const HCrow2 = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction: row;
`;

export const HCdiv = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction: column;
    border-radius: 40px;
    border: solid 1px #000000;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 1%,
        rgb(250, 249, 249) 100%);
    border: rgb(204, 219, 232) 1px solid;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const HCH4 = styled.h3`
    padding: 10px;
    width: 100%;
    font-weight: 600;
`;

export const HCP = styled.p`
    color: #DAA520;
    padding: 10px;
`;

export const HrowM = styled.div`
    width: 100%;
    display: none;

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const HrowW = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;
