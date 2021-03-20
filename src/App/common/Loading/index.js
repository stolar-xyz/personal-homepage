import React from 'react'
import { StyledLoading, Description, Loader } from './styled';
import { ExtraTitleContent, GithubIcon, StyledTiles, Wrapper } from '../Tiles/styled';
import Title from '../Title';

const Loading = () => (
    <StyledTiles>
        <Wrapper>
            <GithubIcon />
            <Title
                subtitle
                as="h2"
            >
                Portfolio
            </Title>
            <ExtraTitleContent>
                My recent projects
            </ExtraTitleContent>
        </Wrapper>
        <StyledLoading>
            <Description>
                Please wait, projects are being loaded...
        </Description>
        <Loader/>
        </StyledLoading>
    </StyledTiles>
);

export default Loading;