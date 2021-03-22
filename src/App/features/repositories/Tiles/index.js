import React from 'react'
import Tile from '../Tile';
import Loading from "../Loading";
import Failure from '../Failure';
import Title from '../../../common/Title';
import { Container, Wrapper, ExtraTitleContent, GithubIcon, StyledTiles } from './styled';
import { useSelector } from "react-redux";
import { selectContent, selectStatus } from '../repositoriesSlice';;

const Tiles = () => {
    const repositoriesStatus = useSelector(selectStatus);
    const repositories = useSelector(selectContent);

    return (
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
            {repositoriesStatus === "loading"
                ? (
                    <Loading />
                )
                : repositoriesStatus === "error"
                    ? (
                        <Failure />
                    )
                    : (
                        <Container>
                            {repositories.map(repository => (
                                <Tile
                                    key={repository.id}
                                    header={repository.name}
                                    description={repository.description}
                                    demo={repository.homepage}
                                    code={repository.html_url}
                                />
                            ))}
                        </Container>
                    )
            }
        </StyledTiles>
    );
};

export default Tiles;