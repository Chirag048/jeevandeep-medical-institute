import styled from 'styled-components';

export const CDSection = styled.section`
    height: calc(100vh - 120px);
    width: 100vw;
    max-width: 1440px;
    overflow: auto;
    scroll-snap-type: y mandatory;
`;

export const CDdiv = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

export const CDCard = styled.div`
    padding: 10px;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 20px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media screen and (max-width: 768px){
        flex-direction: column;
        width: 90%;
        height: 90%;
    }
`;

export const CDcol1 = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 768px){
        margin-top: 5px;
        width: 100%;
        height: 20%;
    }
`;

export const CDcol2 = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 80%;
    }
`;


export const CDimg = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const CDinfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CDH1 = styled.h1`
    margin-bottom: 10px;
    font-weight: 500;

    
    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`;

export const CDH2 = styled.h3`
    padding: 10px;
    font-weight: 400;
    color: #DAA520;

    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`;

export const CDP = styled.p`

    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`;