import React from 'react'
import Description from '../../../common/Description';
import { LinkText, StyledTile, Link, Wrapper, Title } from './styled';

const Tile = ({ header, description, demo, code }) => (
    <StyledTile>
        <Title>
            {header}
        </Title>
        <Description tile>
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