import styled from 'styled-components';

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    margin: 24px 0 0;
    padding: 0;
    list-style: none;

    @media (max-width: ${({ theme }) => theme.tabletMax}px) {
        grid-gap: 18px;
        grid-template-columns: 1fr;
    };
`;