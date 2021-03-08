import React from 'react'
import { StyledHeader } from './styled';

const Header = ({ content }) => (
    <StyledHeader>
        {content}
    </StyledHeader>
);

export default Header;