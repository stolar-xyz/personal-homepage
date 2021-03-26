import React from 'react'
import ExtraTextContent from '../../styled/ExtraTextContent';
import { FlexWrapper } from '../../styled/FlexWrapper';
import { Description, Email, IconLink, IconLinks } from './styled';
import { email, socials } from '../../../personalInfo';

const Footer = () => (
    <FlexWrapper as="footer">
        <ExtraTextContent>
            Let’s talk!
        </ExtraTextContent>
        <Email
            href={`mailto:${email}`}
            title={email}>
            {email}
        </Email>
        <Description>
            I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me ✌
        </Description>
        <IconLinks>
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
        </IconLinks>
    </FlexWrapper>
);

export default Footer;