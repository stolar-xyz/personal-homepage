import {
    StyledTile,
    Link,
    Title,
    Description,
    LinkValue,
    Links,
    LinkRow,
} from './styled';

const Tile = ({ title, description, demo, code }) => (
    <StyledTile>
        <Title>
            {title}
        </Title>
        <Description>
            {description}
        </Description>
        <Links>
            {!!demo && (
                <LinkRow>
                    <dt>Demo:</dt>
                    <LinkValue>
                        <Link
                            href={demo}
                            target='_blank'
                            rel='noopener noreferrer'>
                            {demo}
                        </Link>
                    </LinkValue>
                </LinkRow>
            )}
            <LinkRow>
                <dt>Code:</dt>
                <LinkValue>
                    <Link href={code} target='_blank' rel='noopener noreferrer'>
                        {code}
                    </Link>
                </LinkValue>
            </LinkRow>
        </Links>
    </StyledTile>
);

export default Tile;
