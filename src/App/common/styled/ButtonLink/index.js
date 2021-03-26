import styled, { css } from 'styled-components';

const ButtonLink = styled.a`
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

    ${({ header }) => header && css`
        display: flex;
        align-items: center;
    `};

    &:hover {
        box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.hover.buttonShadow};
    };

    &:active {
        box-shadow: inset 0px 4px 0px rgba(20, 70, 32, 0.2);
    };

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 18px;
        padding: 10px 14px;
    };
`;

export default ButtonLink;