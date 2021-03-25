import React from 'react'
import { LinkText, StyledTile, Link, Wrapper, Title, Description } from './styled';

const Tile = ({ title, description, demo, code }) => (
    <StyledTile>
        <Title>
            {title}
        </Title>
        <Description>
            {description}
        </Description>
        <Wrapper>
            <LinkText>
                Demo:
            </LinkText>
            <Link
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
            >
                {demo}
            </Link>
            <LinkText>
                Code:
            </LinkText>
            <Link
                href={code}
                target="_blank"
                rel="noopener noreferrer"
            >
                {code}
            </Link>
        </Wrapper>
    </StyledTile >
);

export default Tile;