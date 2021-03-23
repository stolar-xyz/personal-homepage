import styled from 'styled-components';
import { ReactComponent as githubIcon } from "../../../images/svgs/github.svg";

export const StyledTiles = styled.section`
    margin: 72px 0 140px;
    
    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        margin: 48px 0;
    };
`;

export const Wrapper = styled.div`
    text-align: center;
`;

export const GithubIcon = styled(githubIcon)`
    color: ${({ theme }) => theme.color.element.icon};
    margin-bottom: 12px;
`;

export const ExtraTitleContent = styled.p`
    color: ${({ theme }) => theme.color.text.secondaryText};
    font-size: 20px;
    margin: 9px 0 24px;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 18px;
        margin: 16px 0 24px;
    };
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;

    @media (max-width: ${({ theme }) => theme.tabletMax}px) {
        grid-gap: 18px;
    };

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        grid-template-columns: 1fr;
    };
`;