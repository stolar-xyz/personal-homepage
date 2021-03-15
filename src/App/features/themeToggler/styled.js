import styled from 'styled-components';

export const Label = styled.label`
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    cursor: pointer;
`;

export const LabelText = styled.span`
    color: ${({ theme }) => theme.colors.primaryText};
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: normal;
`;

export const Toggler = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.themeTogglerBackground};
    margin-left: 14px;
    padding: 2px;
    border-radius: 20px;
    border: 1px solid #8C98A7;
    width: 50px;
    height: 25px;
`;

export const Ball = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.ballColor};
    background: ${({ theme }) => theme.colors.ballBackground};
    border-radius: 50%;
    height: 20px;
    width: 20px;
    transition: background 0.5s, transform 0.5s;
`;

export const CheckBox = styled.input`
    display: none;

    &:checked + ${Ball} {
        transform: translateX(calc(100% + 4px));
    };
`;