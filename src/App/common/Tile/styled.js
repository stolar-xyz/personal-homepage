import styled from 'styled-components';

export const StyledTile = styled.div`
    background: ${({ theme }) => theme.colors.secondaryBackground};
    padding: 50px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border: 6px solid ${({ theme }) => theme.colors.tileBorder};
    border-radius: 4px;

    &:hover {
        border: 6px solid ${({ theme }) => theme.colors.hover.tileBorder};
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(2, auto);
    justify-content: start;
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.tileTitle};
    font-size: 24px;
    margin: 0;
`;

export const Text = styled.span`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryText};
`;

export const Link = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.link};
    border-bottom: 1px solid ${({ theme }) => theme.colors.linkBorder};

    &:hover {
        color: ${({ theme }) => theme.colors.hover.link};
    };
`;