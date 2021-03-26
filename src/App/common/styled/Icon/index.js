import styled from 'styled-components';

const Icon = icon => styled(icon)`
    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        width: 32px;
        height: 32px;
    };
`;

export default Icon;