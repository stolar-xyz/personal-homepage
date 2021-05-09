import ThemeToggler from '../../../features/themeToggler/ThemeToggler';
import ExtraTextContent from '../../styled/ExtraTextContent';
import ButtonLink from '../../styled/ButtonLink';
import LazyLoad from 'react-lazyload';
import profile from '../../../images/profile.jpg';
import {
    MessageIcon,
    StyledHeader,
    Description,
    Name,
    Profile,
    Wrapper,
} from './styled';
import { email } from '../../../personalInfo';

const Header = () => (
    <StyledHeader>
        <ThemeToggler />
        <LazyLoad>
            <Profile src={profile} alt='Author photo' />
        </LazyLoad>
        <Wrapper>
            <ExtraTextContent>This is</ExtraTextContent>
            <Name>Andrzej Stolarek</Name>
            <Description>
                👨🏻‍💻 I’m a passionate front-end developer in love with React,
                currently looking for new job opportunities.
            </Description>
            <ButtonLink href={`mailto:${email}`} title={email}>
                <MessageIcon />
                Hire me
            </ButtonLink>
        </Wrapper>
    </StyledHeader>
);

export default Header;
