import styled, { css } from 'styled-components';

const Description = styled.p`
    margin: 32px 0;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primaryText};
    line-height: 1.4;
    max-width: 633px;

    ${({ contact }) => contact && css`
        color: ${({ theme }) => theme.colors.secondaryText};;
        font-size: 18px;
        margin: 0 0 56px 0;
        max-width: 670px;
    `}

    ${({ tile }) => tile && css`
        font-size: 18px;
        margin: 24px 0;
        max-width: none;
    `}
`;

export default Description;