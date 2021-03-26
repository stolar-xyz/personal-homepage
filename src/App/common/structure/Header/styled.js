import styled from 'styled-components';
import { ReactComponent as Message } from "../../../images/svgs/message.svg";

export const StyledHeader = styled.header`
    display: flex;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        flex-direction: column;
    };
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.text.title};
    margin: 12px 0 0 0;
    font-weight: 900;
    font-size: 38px;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 22px;
    };
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.color.text.primaryText};
    font-size: 20px;
    margin: 35px 0 32px;
    max-width: 633px;
    line-height: 1.6;

    @media (max-width: ${({ theme }) => theme.tabletMax}px) {
        margin: 16px 0 24px;
    };

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 18px;
    };
`;

export const MessageIcon = styled(Message)`
    margin-right: 18px;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        margin-right: 12px;
        width: 20px;
        height: 18px;
    };
`;