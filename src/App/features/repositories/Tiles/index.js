import React, { useEffect } from 'react'
import Tile from '../Tile';
import Loading from "../Loading";
import Failure from '../Failure';
import Subheader from '../../../common/styled/Subheader';
import { Container, Wrapper, ExtraSubheaderContent, Icon } from './styled';
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectStatus } from '../repositoriesSlice';

const Tiles = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return (
        <section>
            <Wrapper>
                <Icon />
                <Subheader>
                    Portfolio
                </Subheader>
                <ExtraSubheaderContent>
                    My recent projects
                </ExtraSubheaderContent>
            </Wrapper>
            {(() => {
                switch (repositoriesStatus) {
                    case "initial":
                        return null;
                    case "loading":
                        return <Loading />;
                    case "error":
                        return <Failure />;
                    case "success":
                        return (
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
                        );
                    default:
                        throw new Error(`incorrect status - ${repositoriesStatus}`);
                }
            })()}
        </section>
    );
};

export default Tiles;