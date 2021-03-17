import React from 'react'
import { StyledLinkButton, LinkButtonIcon } from './styled';

const LinkButton = () => (
    <StyledLinkButton
        href="mailto:stolar.code@gmail.com"
        title="stolar.code@gmail.com"
    >
        <LinkButtonIcon /> Hire Me
    </StyledLinkButton>
);

export default LinkButton;