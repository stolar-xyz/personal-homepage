import styled from "styled-components";

const ExtraTextContent = styled.span`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.color.text.primaryText};
    text-transform: uppercase;
    letter-spacing: normal;
`;

export default ExtraTextContent;