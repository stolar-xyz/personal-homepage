import React from 'react'
import Tile from '../Tile';
import Loading from "../Loading";
import Failure from '../Failure';
import Subheader from '../../../common/styled/Subheader';
import { Container, Wrapper, ExtraSubheaderContent, GithubIcon } from './styled';
import { useSelector } from "react-redux";
import { selectRepositories, selectStatus } from '../repositoriesSlice';

const Tiles = () => {
    const repositoriesStatus = useSelector(selectStatus);
    const repositories = useSelector(selectRepositories);

    return (
        <section>
            <Wrapper>
                <GithubIcon />
                <Subheader>
                    Portfolio
                </Subheader>
                <ExtraSubheaderContent>
                    My recent projects
                </ExtraSubheaderContent>
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
                            {repositories.map(({ id, name, description, homepage, html_url }) => (
                                <Tile
                                    key={id}
                                    title={name}
                                    description={description}
                                    demo={homepage}
                                    code={html_url}
                                />
                            ))}
                        </Container>
                    )
            }
        </section>
    );
};

export default Tiles;