import styled from 'styled-components';
import { ReactComponent as message } from "../../images/svgs/message.svg";

export const StyledLinkButton = styled.a`
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    background: ${({ theme }) => theme.colors.button};
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 20px;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.hover.buttonShadow};
    };

    &:active {
        box-shadow: inset 0px 4px 0px rgba(20, 70, 32, 0.2);
    };
`;

export const LinkButtonIcon = styled(message)`
    margin-right: 18px;
`;