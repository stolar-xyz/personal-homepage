import styled, { css } from 'styled-components';

const Title = styled.h1`
    color: ${({ theme }) => theme.color.text.title};
    margin: 12px 0 0 0;
    font-weight: 900;
    font-size: 38px;

    ${({ header }) => header && css`
        @media (max-width: ${({ theme }) => theme.mobileMax}px) {
            font-size: 22px;
        };
    `}

    ${({ subtitle }) => subtitle && css`
        font-size: 30px;
        margin: 0;

        @media (max-width: ${({ theme }) => theme.mobileMax}px) {
            font-size: 18px;
        };
    `}

    ${({ mail }) => mail && css`
        font-size: 32px;
        margin: 24px 0;
        transition: color 0.3s;

        &:hover {
            color: ${({ theme }) => theme.color.hover.title};
        };

        @media (max-width: ${({ theme }) => theme.mobileMax}px) {
            font-size: 18px;
            margin: 12px 0;
        };
    `}
`;

export default Title;