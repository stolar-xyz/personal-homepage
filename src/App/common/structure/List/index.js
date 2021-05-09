import { ListItem, StyledList } from './styled';

const List = ({ items }) => (
    <StyledList>
        {items.map(item => (
            <ListItem key={item}>
                {item}
            </ListItem>
        ))}
    </StyledList>
);

export default List;
