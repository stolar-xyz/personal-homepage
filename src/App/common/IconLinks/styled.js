import styled from 'styled-components';

export const IconLink = styled.a`
    margin-right: 24px;
    color: ${({ theme }) => theme.color.element.iconLink};
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.hover.iconLink};
    };
`;