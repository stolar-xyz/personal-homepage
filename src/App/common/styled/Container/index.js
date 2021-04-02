import styled from 'styled-components';

const Container = styled.div`
    max-width: 1216px;
    padding: 0 14px;
    margin: 52px auto 86px;

    @media (max-width: ${({ theme }) => theme.tabletMax}px) {
        margin: 32px auto;
    }
`;

export default Container;
