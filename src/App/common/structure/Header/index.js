import React from 'react'
import ThemeToggler from '../../../features/themeToggler/ThemeToggler';
import ExtraTextContent from '../../styled/ExtraTextContent';
import ButtonLink from '../../styled/ButtonLink';
import LazyLoad from 'react-lazyload';
import profile from "../../../images/profile.jpg";
import { FlexWrapper } from '../../styled/FlexWrapper';
import { MessageIcon, StyledHeader, Description, Title, Profile } from './styled';
import { email } from '../../../personalInfo';


const Header = () => (
    <StyledHeader>
        <ThemeToggler />
        <LazyLoad>
            <Profile
                src={profile}
                alt="Author photo"
            />
        </LazyLoad>
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
                href={`mailto:${email}`}
                title={email}>
                <MessageIcon /> Hire me
            </ButtonLink>
        </FlexWrapper>
    </StyledHeader>
);

export default Header;