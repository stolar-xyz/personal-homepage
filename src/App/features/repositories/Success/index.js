import React from 'react'
import Tile from '../Tile';
import { useSelector } from 'react-redux';
import { selectRepositories } from '../repositoriesSlice';
import { Container } from './styled';

const Success = () => {
    const repositories = useSelector(selectRepositories);

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
};

export default Success;