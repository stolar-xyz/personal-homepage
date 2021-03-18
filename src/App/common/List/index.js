import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-gap: 24px;
    padding: 32px 0 0 0;
    margin: 18px 0 0 0;
    border-top: 1px solid ${({ theme }) => theme.color.border.listBorder};
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        grid-gap: 18px;
        padding: 12px 0 0 0;
        margin: 12px 0 0 0;
    };
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: ${({ theme }) => theme.color.text.primaryText};

    &::before {
        content: "";
        background: #0366D6;
        border-radius: 50%;
        min-width: 9px;
        min-height: 9px;
        margin-right: 16px;

        @media (max-width: ${({ theme }) => theme.mobileMax}px) {
            min-width: 6px;
            min-height: 6px;
        };
    }

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 14px;
    };
`;