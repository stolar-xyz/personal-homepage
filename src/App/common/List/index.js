import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    padding: 32px 0 0 0;
    margin: 18px 0 0 0;
    border-top: 1px solid ${({ theme }) => theme.colors.listBorder};
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryText};

    &::before {
        content: "";
        background: #0366D6;
        border-radius: 50%;
        min-width: 9px;
        min-height: 9px;
        margin-right: 16px;
    }
`;