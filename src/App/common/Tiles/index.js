import React from 'react'
import Tile from '../Tile';
import { Container, Wrapper, ExtraTitleContent, GithubIcon } from './styled';
import Title from '../Title';

const Tiles = () => (
    <section>
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
    </section>
);

export default Tiles;