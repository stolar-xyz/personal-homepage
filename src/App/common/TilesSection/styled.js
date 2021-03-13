import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    margin-bottom: 24px;
`;

export const Icon = styled.div`
    color: ${({ theme }) => theme.colors.icon};
    margin-bottom: 12px;
`;

export const ExtraTitleContent = styled.div`
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 20px;
    margin: 9px 0 0;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
`;