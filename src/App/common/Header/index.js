import React from 'react'
import ThemeToggler from '../../features/themeToggler/ThemeToggler';
import Description from '../Description';
import ExtraTextContent from '../ExtraTextContent';
import { FlexWrapper } from '../FlexWrapper';
import MainLink from '../LinkButton';
import Profile from '../Profile';
import Title from '../Title';
import { StyledHeader } from './styled';

const Header = () => (
    <StyledHeader>
        <ThemeToggler />
        <Profile />
            <FlexWrapper header>
                <ExtraTextContent>
                    {"This is"}
                </ExtraTextContent>
                <Title header>
                    {"Andrzej Stolarek"}
                </Title>
                <Description header>
                    {"👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities."}
                </Description>
                <MainLink />
            </FlexWrapper>
    </StyledHeader>
);

export default Header;