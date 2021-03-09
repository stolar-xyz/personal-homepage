import styled from 'styled-components';;

export const StyledArticle = styled.article`
    max-width: 1089px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
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
    color: #6E7E91;
    text-transform: uppercase;
`;