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