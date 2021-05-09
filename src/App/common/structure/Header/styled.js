import styled from 'styled-components';
import { ReactComponent as Message } from '../../../assets/svgs/message.svg';

export const StyledHeader = styled.header`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 66px;
    position: relative;
    justify-content: start;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        grid-gap: 16px;
        grid-auto-flow: row;
    }
`;

export const Wrapper = styled.div`
    align-self: center;
`;

export const Profile = styled.img`
    width: 45vw;
    height: 45vw;
    max-width: 398px;
    max-height: 398px;
    border-radius: 50%;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        display: block;
        margin: 0 auto;
    }
`;

export const Name = styled.h1`
    color: ${({ theme }) => theme.color.text.secondaryText};
    margin: 12px 0 0 0;
    font-weight: 900;
    font-size: 38px;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 22px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 35px 0 32px;
    max-width: 633px;
    line-height: 1.6;

    @media (max-width: ${({ theme }) => theme.tabletMax}px) {
        margin: 16px 0 24px;
    }

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 18px;
    }
`;

export const MessageIcon = styled(Message)`
    margin-right: 18px;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        margin-right: 12px;
        width: 20px;
        height: 18px;
    }
`;
