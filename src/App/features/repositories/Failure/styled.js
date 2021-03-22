import styled from 'styled-components';
import { ReactComponent as dangerIcon } from "../../../images/svgs/danger.svg";

export const StyledFailure = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 96px 140px;
`;

export const Header = styled.h3`
    font-size: 24px;
    margin: 24px 0 0 0;
    color: ${({ theme }) => theme.color.text.secondaryText};
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 32px 0;
    color: ${({ theme }) => theme.color.text.secondaryText};
    line-height: 1.4;
    text-align: center;
`;

export const Button = styled.a`
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    background: ${({ theme }) => theme.color.background.linkButtonBackground};
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 700;
    font-size: 20px;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.hover.buttonShadow};
    };

    &:active {
        box-shadow: inset 0px 4px 0px rgba(20, 70, 32, 0.2);
    };

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 18px;
    };
`;

export const DangerIcon = styled(dangerIcon)`
    color: ${({ theme }) => theme.color.element.iconLink};
`;