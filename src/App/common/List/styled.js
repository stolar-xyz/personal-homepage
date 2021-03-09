import styled from "styled-components";

export const StyledList = styled.ul`
    list-style: inside;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 16px;
    padding: 32px 0 0 0;
    margin: 18px 0 0 0;
    border-top: 1px solid rgba(229, 229, 229, 1);
`;

export const ListItem = styled.li`
    font-size: 18px;
    color: #6E7E91;

    &::marker {
        color: #0366D6;
    }
`;