import styled from 'styled-components';

export const AContiner = styled.section`
    margin: 10px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1440px;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 100% - 80px;
    }
`;

export const Arow1 = styled.div`
    margin: 10px;
    width: 80%;
    text-align: center;

    @media screen and (max-width: 768px){
        width: 100%;
    }

`;

export const AH1 = styled.h1`
    padding : 10px;
`;

export const AP = styled.p`
    padding : 10px;
`;

export const Asection1 = styled.section`
    margin: 30px 10px 10px 10px;
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

export const Acol = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding : 10px;
    width: 50%;
    height: 100%;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 50%;
    }
`;

export const Aimg = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const AObj = styled.div`
    padding: 10px;
`;

export const AObjdiv = styled.div`
    display: flex;
    align-items: center;
`;

export const AOP = styled.p`
    padding : 10px;
    margin : 10px;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;