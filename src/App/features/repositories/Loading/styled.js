import styled, { keyframes } from 'styled-components';

export const StyledLoading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 88px 0 140px;
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 0 0 48px 0;
    color: ${({ theme }) => theme.color.text.secondaryText};
    line-height: 1.4;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 14px;
        margin: 0 0 32px 0;
    };
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 10px solid ${({ theme }) => theme.color.border.loaderBorder};
    border-top-color: #2B77CC;
    animation: ${spin} 1s linear infinite;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        width: 130px;
        height: 130px; 
        border-width: 5px;
    };
`;