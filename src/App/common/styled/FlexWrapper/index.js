import styled, { css } from 'styled-components';

export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${({ header }) => header && css`
        justify-content: center;
    `}
`;