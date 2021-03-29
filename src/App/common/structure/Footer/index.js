import React from 'react'
import ExtraTextContent from '../../styled/ExtraTextContent';
import { Address, Email, IconLink, IconLinks, Paragraph, StyledFooter } from './styled';
import { email, socials } from '../../../personalInfo';

const Footer = () => (
    <StyledFooter>
        <ExtraTextContent>
            Let’s talk!
        </ExtraTextContent>
        <Address as="address">
            <Email
                href={`mailto:${email}`}
                title={email}>
                {email}
            </Email>
            <Paragraph>
                I’m always open to new projects whenever I have the time. If you have a website
                in mind and need some help to make your ideas come to life,
                feel free to contact me ✌
            </Paragraph>
            <IconLinks>
                {socials.map(({ link, title, Icon }) => (
                    <li key={title}>
                        <IconLink
                            href={link}
                            title={title}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Icon />
                        </IconLink>
                    </li>
                ))}
            </IconLinks>
        </Address>
    </StyledFooter>
);

export default Footer;