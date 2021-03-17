import styled from 'styled-components';;

export const StyledHeader = styled.header`
    display: flex;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        display: block;
    };
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 0 0 66px;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        margin: 16px 0 0 0;
    };
`;