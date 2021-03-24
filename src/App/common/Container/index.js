import styled from 'styled-components';

const Container = styled.div`
    max-width: 1216px;
    padding: 0 14px;
    margin: 119px auto;

    @media (max-width: ${({ theme }) => theme.tabletMax}px) {
        margin: 34px auto;
    };
`;

export default Container;