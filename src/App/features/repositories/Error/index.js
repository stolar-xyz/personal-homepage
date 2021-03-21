import React from 'react'
import { ExtraTitleContent, GithubIcon, StyledTiles, Wrapper } from '../Tiles/styled';
import Title from '../../../common/Title';
import { Button, DangerIcon, Description, Header, StyledError } from './styled';

const Error = () => (
    <StyledTiles>
        <Wrapper>
            <GithubIcon />
            <Title
                subtitle
                as="h2"
            >
                {"Portfolio"}
            </Title>
            <ExtraTitleContent>
                {"My recent projects"}
            </ExtraTitleContent>
        </Wrapper>
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
    </StyledTiles>
);

export default Error;