import React from 'react'
import { Button, DangerIcon, Description, Header, StyledError } from './styled';

const Error = () => (
        <StyledError>
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
                title="Github repository">
                Go to Github
            </Button>
        </StyledError >
);

export default Error;