import React from 'react'
import Description from '../Description';
import ExtraTextContent from '../ExtraTextContent'
import { FlexWrapper } from '../FlexWrapper';
import IconLinks from '../IconLinks';
import Title from '../Title';

const Footer = () => (
    <FlexWrapper as="footer">
        <ExtraTextContent>
            Let’s talk!
        </ExtraTextContent>
        <Title
            mail
            as="a"
            href="mailto:stolar.code@gmail.com"
            title="stolar.code@gmail.com"
        >
            stolar.code@gmail.com
            </Title>
        <Description contact>
            I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me ✌
        </Description>
        <IconLinks />
    </FlexWrapper>
);

export default Footer