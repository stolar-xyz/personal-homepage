import styled from 'styled-components';

export const StyledTile = styled.li`
    background: ${({ theme }) => theme.color.background.secondaryBackground};
    padding: 50px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border: 6px solid ${({ theme }) => theme.color.border.tileBorder};
    border-radius: 4px;
    transition: border 0.3s;

    &:hover {
        border: 6px solid ${({ theme }) => theme.color.hover.tileBorder};
    };

    @media (max-width: ${({ theme }) => theme.tabletMax}px) {
        padding: 38px;
    };

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        padding: 24px;
    };
`;

export const Wrapper = styled.div`
    font-size: 18px;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(2, auto);
    justify-content: start;

    @media (max-width: ${({ theme }) => theme.tabletMax}px) {
        grid-gap: 10px;
    };

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 14px;
    };
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.color.text.tileTitle};
    font-size: 24px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 16px;
    };
`;

export const Description = styled.p`
    font-size: 18px;
    margin: 24px 0;
    color: ${({ theme }) => theme.color.text.primaryText};
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 14px;
    };
`;

export const LinkText = styled.span`
    color: ${({ theme }) => theme.color.text.primaryText};
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.text.link};
    text-underline-offset: 2px;
    overflow-wrap: anywhere;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.hover.link};
    };
`;