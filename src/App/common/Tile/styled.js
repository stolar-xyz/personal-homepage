import styled from 'styled-components';

export const StyledTile = styled.div`
    background: #ffffff;
    padding: 50px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border: 6px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;

    &:hover {
        border: 6px solid rgba(3, 102, 214, 0.2);
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(2, auto);
    justify-content: start;
`;

export const Title = styled.h3`
    color: #0366D6;
    font-size: 24px;
    margin: 0;
`;

export const Text = styled.span`
    font-size: 18px;
    color: #6E7E91;
`;

export const Link = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: #0366D6;
    border-bottom: 1px solid rgba(3, 102, 214, 0.2);

    &:hover {
        color: #2188FF;
    };
`;