import styled from "styled-components";

export const StyledList = styled.ul`
    list-style: inside;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 16px;
    padding: 0;
    margin: 32px 0 0 0;
`;

export const ListItem = styled.li`
    font-size: 18px;
    color: #6E7E91;

    &::marker {
        color: #0366D6;
    }
`;