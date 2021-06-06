import styled from 'styled-components';

export const CUContiner = styled.div`
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

export const CUSection = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const CUCard = styled.div`
    margin: 20px;
    width: 25%;
    height: 200px;
    position: relative;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 40px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media screen and (max-width: 768px){
        width: 80%;
        margin: 10px;
    }
`;

export const CUCardimg = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.7;
    border-radius: 40px;
    overflow: hidden;
`;

export const CUCarddiv = styled.div`
    position: absolute;
    bottom: 8px;
    left: 16px;
`;

export const CUCardH1 = styled.h1`
    color: #ffffff;
    font-weight: 500;
`;

export const CUCardH3 = styled.h3`
    color: #ffffff;
    font-weight: 400;
`;