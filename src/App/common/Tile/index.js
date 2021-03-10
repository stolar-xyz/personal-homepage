import React from 'react'
import Description from '../Description';
import Title from '../Title';
import { Text, StyledTile, Link, Wrapper } from './styled';

const Tile = ({ header, description, demo, code }) => (
    <StyledTile>
        <Title tile as="h3">
            {header}
        </Title>
        <Description tile>
            {description}
        </Description>
        <Wrapper>
            <Text>
                Demo:
            </Text>
            <Link
                href="https://www.google.com/"
                target="_blank"
                rel="noopener"
            >
                {demo}
            </Link>
            <Text>
                Code:
            </Text>
            <Link
                href="https://www.google.com/"
                target="_blank"
                rel="noopener"
            >
                {code}
            </Link>
        </Wrapper>
    </StyledTile >
);

export default Tile;