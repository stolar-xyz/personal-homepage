import styled from 'styled-components';;

export const StyledHeader = styled.header`
    display: flex;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        flex-direction: column;
    };
`;