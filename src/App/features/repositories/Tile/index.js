import React from 'react'
import { LinkText, StyledTile, Link, Title, Description, LinkValue, Links, LinkRow } from './styled';

const Tile = ({ title, description, demo, code }) => (
    <StyledTile>
        <Title>
            {title}
        </Title>
        <Description>
            {description}
        </Description>
        <Links>
            <LinkRow>
                <LinkText>
                    Demo:
                </LinkText>
                <LinkValue>
                    <Link
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {demo}
                    </Link>
                </LinkValue>
            </LinkRow>
            <LinkRow>
                <LinkText>
                    Code:
                </LinkText>
                <LinkValue>
                    <Link
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {code}
                    </Link>
                </LinkValue>
            </LinkRow>
        </Links>
    </StyledTile>
);

export default Tile;