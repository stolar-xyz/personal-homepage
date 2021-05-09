import ButtonLink from '../../../../common/styled/ButtonLink';
import { DangerIcon, Description, Header, StyledFailure } from './styled';
import { repositoriesUrl } from '../../../../personalInfo';

const Failure = () => (
    <StyledFailure>
        <DangerIcon />
        <Header>
            Ooops! Something went wrong...
        </Header>
        <Description>
            Sorry, failed to load projects. <br />
            You can check them directly on GitHub.
        </Description>
        <ButtonLink
            href={repositoriesUrl}
            target='_blank'
            rel='noopener noreferrer'
            title='GitHub repositories'>
            Go to GitHub
        </ButtonLink>
    </StyledFailure>
);

export default Failure;
