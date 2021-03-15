import styled from 'styled-components';

export const IconLink = styled.a`
    margin-right: 24px;
    color: ${({ theme }) => theme.colors.iconLink};
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.hover.iconLink};
    };
`;