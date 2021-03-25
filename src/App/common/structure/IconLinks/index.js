import React from 'react'
import { IconLink, StyledIconLinks } from './styled';
import { ReactComponent as GithubExtraIcon } from "../../../images/svgs/githubExtra.svg";
import { ReactComponent as FacebookIcon } from "../../../images/svgs/facebook.svg";
import { ReactComponent as LinkedInIcon } from "../../../images/svgs/linkedIn.svg";
import { ReactComponent as InstagramIcon } from "../../../images/svgs/instagram.svg";

const IconLinks = () => (
    <StyledIconLinks>
        <IconLink
            href="https://github.com/stolar-code/"
            target="_blank"
            rel="noopener noreferrer"
            title="Github">
            <GithubExtraIcon />
        </IconLink>
        <IconLink
            href="https://www.facebook.com/ctucb/"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook">
            <FacebookIcon />
        </IconLink>
        <IconLink
            href="https://www.linkedin.com/in/stolar-code/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn">
            <LinkedInIcon />
        </IconLink>
        <IconLink
            href="https://www.instagram.com/stolar.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram">
            <InstagramIcon />
        </IconLink>
    </StyledIconLinks>
);

export default IconLinks;