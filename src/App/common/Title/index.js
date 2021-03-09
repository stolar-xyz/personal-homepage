import styled, { css } from 'styled-components';

const Title = styled.h1`
    margin: 12px 0 0 0;
    font-weight: 900;
    font-size: 38px;

    ${({ subtitle }) => subtitle && css`
        font-size: 30px;
        margin: 0;
    `}

    ${({ mail }) => mail && css`
        font-size: 32px;
        margin: 24px 0;
    `}
`;

export default Title;