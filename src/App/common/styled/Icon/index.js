import styled from 'styled-components';

const Icon = icon => styled(icon)`
    height: auto;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        width: 32px;
    }
`;

export default Icon;
