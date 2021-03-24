import styled from 'styled-components';
import { ReactComponent as dangerIcon } from "../../../images/svgs/danger.svg";

export const StyledFailure = styled.div`
    text-align: center;
    margin: 96px 0 140px;
`;

export const Header = styled.h3`
    font-size: 24px;
    margin: 24px 0 0 0;
    color: ${({ theme }) => theme.color.text.secondaryText};

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 16px;
    };
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 32px 0;
    color: ${({ theme }) => theme.color.text.secondaryText};
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        font-size: 14px;
        margin: 24px 0;
    };
`;

export const DangerIcon = styled(dangerIcon)`
    color: ${({ theme }) => theme.color.element.iconLink};
`;