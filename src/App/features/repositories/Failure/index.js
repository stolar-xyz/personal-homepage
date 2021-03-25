import React from 'react'
import ButtonLink from '../../../common/styled/ButtonLink';
import { DangerIcon, Description, Header, StyledFailure } from './styled';

const Failure = () => (
        <StyledFailure>
            <DangerIcon />
            <Header>
                Ooops! Something went wrong...
            </Header>
            <Description>
                Sorry, failed to load Github projects. <br />
                You can check them directly on Github.
            </Description>
            <ButtonLink
                href="https://github.com/stolar-code?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                title="Github repositories">
                Go to Github
            </ButtonLink>
        </StyledFailure >
);

export default Failure;