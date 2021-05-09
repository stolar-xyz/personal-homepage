import Tile from '../Tile';
import { useSelector } from 'react-redux';
import { selectRepositories } from '../../repositoriesSlice';
import { Tiles } from './styled';

const Success = () => {
    const repositories = useSelector(selectRepositories);

    return (
        <Tiles>
            {repositories.map(
                ({ id, name, description, homepage, html_url }) => (
                    <Tile
                        key={id}
                        title={name}
                        description={description}
                        demo={homepage}
                        code={html_url}
                    />
                )
            )}
        </Tiles>
    );
};

export default Success;
