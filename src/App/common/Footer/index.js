import React from 'react'
import Description from '../Description';
import ExtraTextContent from '../ExtraTextContent'
import IconLinks from '../IconLinks';
import Title from '../Title';
import { StyledFooter } from './styled';

const Footer = () => (
    <StyledFooter>
        <ExtraTextContent>
            {"Let’s talk!"}
        </ExtraTextContent>
        <Title
            mail
            as="h2">
            {"stolar.code@gmail.com"}
        </Title>
        <Description contact>
            {"I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me ✌"}
        </Description>
        <IconLinks />
    </StyledFooter>
);

export default Footer