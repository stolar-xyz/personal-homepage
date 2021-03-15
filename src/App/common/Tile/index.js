import React from 'react'
import Description from '../Description';
import { Text, StyledTile, Link, Wrapper, Title } from './styled';

const Tile = ({ header, description, demo, code }) => (
    <StyledTile>
        <Title>
            {header}
        </Title>
        <Description>
            {description}
        </Description>
        <Wrapper>
            <Text>
                Demo:
            </Text>
            <Link
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                {demo}
            </Link>
            <Text>
                Code:
            </Text>
            <Link
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                {code}
            </Link>
        </Wrapper>
    </StyledTile >
);

export default Tile;