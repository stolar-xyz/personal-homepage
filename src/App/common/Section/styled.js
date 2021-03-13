import styled from 'styled-components';

export const StyledSection = styled.section`
    background: ${({ theme }) => theme.colors.secondaryBackground};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 32px;
`;