import styled from 'styled-components';

export const StyledSection = styled.section`
    background: ${({ theme }) => theme.color.background.secondaryBackground};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 32px;
    margin: 72px 0;

    @media (max-width: ${({ theme }) => theme.tabletMax}px) {
        margin: 54px 0;
    };

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        padding: 16px;
    };
`;