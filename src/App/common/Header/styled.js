import styled from 'styled-components';
import { ReactComponent as message } from "../../images/svgs/message.svg";

export const StyledHeader = styled.header`
    display: flex;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        flex-direction: column;
    };
`;

export const MessageIcon = styled(message)`
    margin-right: 18px;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        margin-right: 12px;
    };
`;