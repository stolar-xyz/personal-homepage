import styled from 'styled-components';

export const StyledIconLinks = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 24px;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        align-self: center;
    };
`;

export const IconLink = styled.a`
    color: ${({ theme }) => theme.color.element.iconLink};
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.hover.iconLink};
    };
`;