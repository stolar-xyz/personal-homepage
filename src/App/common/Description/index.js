import styled, { css } from 'styled-components';

const Description = styled.p`
    margin: 32px 0;
    font-size: 20px;
    color: #6E7E91;
    line-height: 1.4;

    ${({ contact }) => contact && css`
        color: black;
        font-size: 18px;
        margin: 0 0 56px 0;
        max-width: 670px;
    `}
`;

export default Description;