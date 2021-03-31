import styled, { css } from 'styled-components';

export const Toggler = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    position: absolute;
    right: 0;
    padding: 0;
    cursor: pointer;
    color: inherit;

    ${({ clicked }) => clicked && css`
        ${Ball} {
            transform: translateX(calc(100% + 4px));
        };
    `};
`;

export const TogglerField = styled.span`
    display: flex;
    align-items: center;
    padding: 2px;
    border-radius: 20px;
    border: 1px solid #8C98A7;
    width: 50px;
    height: 25px;
    background: ${({ theme }) => theme.color.background.themeTogglerBackground};
`;

export const Ball = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.element.ballColor};
    background: ${({ theme }) => theme.color.background.ballBackground};
    border-radius: 50%;
    height: 20px;
    width: 20px;
    transition: background 0.3s, transform 0.5s;
`;