import styled from 'styled-components';

const Subheader = styled.h2`
    color: ${({ theme }) => theme.color.text.secondaryText};
    font-weight: 900;
    font-size: 30px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 18px;
    }
`;

export default Subheader;
