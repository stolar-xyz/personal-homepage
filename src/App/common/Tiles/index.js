import React from 'react'
import Tile from '../Tile';
import { Container, Wrapper, ExtraTitleContent, GithubIcon, StyledTiles } from './styled';
import Title from '../Title';

const Tiles = () => (
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
        <Container>
            <Tile
                header={"Movies Browser"}
                description={"Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search."}
                demo={"https://link.demo.com"}
                code={"https://link.code.com"}
            />
            <Tile
                header={"Movies Browser"}
                description={"Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search."}
                demo={"https://link.demo.com"}
                code={"https://link.code.com"}
            />
            <Tile
                header={"Movies Browser"}
                description={"Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search."}
                demo={"https://link.demo.com"}
                code={"https://link.code.com"}
            />
            <Tile
                header={"Movies Browser"}
                description={"Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search."}
                demo={"https://link.demo.com"}
                code={"https://link.code.com"}
            />
        </Container>
    </StyledTiles>
);

export default Tiles;