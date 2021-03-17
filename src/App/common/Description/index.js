import styled, { css } from 'styled-components';

const Description = styled.p`
    font-size: 18px;
    margin: 24px 0;
    color: ${({ theme }) => theme.color.text.primaryText};
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 14px;
    };

    ${({ header }) => header && css`
        font-size: 20px;
        margin: 32px 0;
        max-width: 633px;
        line-height: 1.6;

        @media (max-width: ${({ theme }) => theme.mobileMax}px) {
            font-size: 18px;
            margin: 16px 0 24px;
        };
    `}

    ${({ contact }) => contact && css`
        color: ${({ theme }) => theme.color.text.secondaryText};
        margin: 0 0 56px 0;
        max-width: 670px;

        @media (max-width: ${({ theme }) => theme.mobileMax}px) {
            margin: 0 0 40px 0;;
        };
    `}
`;

export default Description;