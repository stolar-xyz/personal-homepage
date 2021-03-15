import React from 'react'
import ThemeToggler from '../../features/themeToggler/ThemeToggler';
import Description from '../Description';
import ExtraTextContent from '../ExtraTextContent';
import MainLink from '../LinkButton';
import Profile from '../Profile';
import Title from '../Title';
import { Container, StyledHeader } from './styled';

const Header = () => (
    <StyledHeader>
        <ThemeToggler />
        <Profile />
        <Container>
            <ExtraTextContent>
                {"This is"}
            </ExtraTextContent>
            <Title>
                {"Andrzej Stolarek"}
            </Title>
            <Description header>
                {"👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities."}
            </Description>
            <MainLink />
        </Container>
    </StyledHeader>
);

export default Header;