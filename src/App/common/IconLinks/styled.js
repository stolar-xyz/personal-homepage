import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
`;

export const IconLink = styled.a`
    color: ${({ theme }) => theme.colors.iconLink};

    &:hover {
        color: ${({ theme }) => theme.colors.hover.iconLink};
    };
`;