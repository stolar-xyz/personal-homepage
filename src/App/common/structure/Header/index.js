import React from 'react'
import ThemeToggler from '../../../features/themeToggler/ThemeToggler';
import ExtraTextContent from '../../styled/ExtraTextContent';
import ButtonLink from '../../styled/ButtonLink';
import Profile from '../Profile';
import { FlexWrapper } from '../../styled/FlexWrapper';
import { MessageIcon, StyledHeader, Description, Title } from './styled';

const Header = () => (
    <StyledHeader>
        <ThemeToggler />
        <Profile />
        <FlexWrapper header>
            <ExtraTextContent>
                This is
            </ExtraTextContent>
            <Title>
                Andrzej Stolarek
            </Title>
            <Description>
                👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
            </Description>
            <ButtonLink header
                href="mailto:stolar.code@gmail.com"
                title="stolar.code@gmail.com">
                <MessageIcon /> Hire me
            </ButtonLink>
        </FlexWrapper>
    </StyledHeader>
);

export default Header;