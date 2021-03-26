import React from 'react'
import { IconLink, StyledIconLinks } from './styled';
import { socials } from '../../../personalInfo';


const IconLinks = () => (
    <StyledIconLinks>
        {socials.map(({ link, title, Icon }) => (
            <IconLink
                href={link}
                title={title}
                key={title}
                target="_blank"
                rel="noopener noreferrer">
                <Icon />
            </IconLink>
        ))}
    </StyledIconLinks>
);

export default IconLinks;

