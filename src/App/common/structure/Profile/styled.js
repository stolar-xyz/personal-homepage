import styled from 'styled-components';

export const StyledProfile = styled.img`
   width: 45vw;
   height: 45vw;
   max-width: 398px;
   max-height: 398px;
   border-radius: 50%;
   margin: 0 66px 0 0;

   @media (max-width: ${({ theme }) => theme.mobileMax}px) {
      display: block;
      margin: 0 auto 16px;
   };
`;