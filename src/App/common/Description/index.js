import styled, { css } from 'styled-components';

const Description = styled.p`
    font-size: 18px;
    margin: 24px 0;
    color: ${({ theme }) => theme.colors.primaryText};
    line-height: 1.4;

    ${({ header }) => header && css`
        font-size: 20px;
        margin: 32px 0;
        max-width: 633px;
    `}

    ${({ contact }) => contact && css`
        color: ${({ theme }) => theme.colors.secondaryText};;
        margin: 0 0 56px 0;
        max-width: 670px;
    `}
`;

export default Description;