import styled from 'styled-components';
import { ReactComponent as dangerIcon } from "../../../images/svgs/danger.svg";

export const StyledFailure = styled.div`
    text-align: center;
    margin: 96px 0 140px;
`;

export const Header = styled.h3`
    font-size: 24px;
    margin: 24px 0 0 0;
    color: ${({ theme }) => theme.color.text.secondaryText};

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 16px;
    };
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 32px 0;
    color: ${({ theme }) => theme.color.text.secondaryText};
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 14px;
        margin: 24px 0;
    };
`;

export const Button = styled.a`
    display: inline-block;
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    background: ${({ theme }) => theme.color.background.linkButtonBackground};
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 20px;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.hover.buttonShadow};
    };

    &:active {
        box-shadow: inset 0px 4px 0px rgba(20, 70, 32, 0.2);
    };

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 14px;
        padding: 8px 12px;
    };
`;

export const DangerIcon = styled(dangerIcon)`
    color: ${({ theme }) => theme.color.element.iconLink};
`;