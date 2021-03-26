import styled from 'styled-components';

export const Description = styled.p`
    font-size: 18px;
    line-height: 1.4;
    color: ${({ theme }) => theme.color.text.secondaryText};
    margin: 0 0 56px 0;
    max-width: 670px;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 14px;
        margin: 0 0 40px 0;;
    };
`;

export const Email = styled.a`
    color: ${({ theme }) => theme.color.text.title};
    font-weight: 900;
    font-size: 32px;
    margin: 24px 0;
    transition: color 0.3s;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.color.hover.title};
    };

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 18px;
        margin: 12px 0;
    };
`;

export const IconLinks = styled.div`
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