import React from 'react'
import { Button, DangerIcon, Description, Header, StyledFailure } from './styled';

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
            <Button
                href="https://github.com/stolar-code?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                title="Github repositories">
                Go to Github
            </Button>
        </StyledFailure >
);

export default Failure;