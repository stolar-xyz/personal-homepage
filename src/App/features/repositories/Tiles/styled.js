import styled from 'styled-components';
import { ReactComponent as GithubIcon } from "../../../images/svgs/github.svg";

export const Wrapper = styled.div`
    text-align: center;
`;

export const Icon = styled(GithubIcon)`
    color: ${({ theme }) => theme.color.element.icon};
    height: auto;
    margin-bottom: 13px;
    
    @media(max-width: ${({ theme }) => theme.mobileMax}px) {
        width: 32px;
    };
`;

export const ExtraSubheaderContent = styled.p`
    color: ${({ theme }) => theme.color.text.secondaryText};
    font-size: 20px;
    margin: 8px 0 0;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 18px;
        margin: 16px 0 0;
    };
`;

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    margin: 24px 0 0;
    padding: 0;
    list-style: none;

    @media (max-width: ${({ theme }) => theme.tabletMax}px) {
        grid-gap: 18px;
        grid-template-columns: 1fr;
    };
`;