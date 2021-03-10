import React from 'react'
import Tile from '../Tile';
import { Container, Icon, Wrapper, ExtraTitleContent } from './styled';

const TilesSection = ({ title, extraTitleContent, extraContent }) => (
    <section>
        <Wrapper>
            <Icon>
                {extraContent}
            </Icon>
                {title}
            <ExtraTitleContent>
                {extraTitleContent}
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

export default TilesSection;