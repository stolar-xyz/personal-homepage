import styled from 'styled-components';;

export const StyledArticle = styled.article`
    display: flex;
    position: relative;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const ExtraTitleContent = styled.span`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primaryText};
    text-transform: uppercase;
`;