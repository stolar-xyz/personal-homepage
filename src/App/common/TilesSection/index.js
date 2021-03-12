import React from 'react'
import Tile from '../Tile';
import { Container, Icon, Wrapper, ExtraTitleContent } from './styled';
import { ReactComponent as GithubIcon } from "../../images/svgs/github.svg";

const TilesSection = ({ title, extraTitleContent }) => (
    <section>
        <Wrapper>
            <Icon>
                <GithubIcon/>
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