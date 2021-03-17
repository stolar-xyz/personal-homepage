import styled from 'styled-components';

export const StyledIconLinks = styled.div`
    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        align-self: center;
    };
`;

export const IconLink = styled.a`
    margin-right: 24px;
    color: ${({ theme }) => theme.color.element.iconLink};
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.hover.iconLink};
    };
`;