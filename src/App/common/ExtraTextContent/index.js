import styled, { css } from "styled-components";

const ExtraTextContent = styled.span`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.color.text.primaryText};
    text-transform: uppercase;
    letter-spacing: normal;

    ${({ toggler }) => toggler && css`
        margin-right: 14px;

        @media (max-width: ${({ theme }) => theme.mobileMax}px) {
            display: none;
        };
    `};
`;

export default ExtraTextContent;