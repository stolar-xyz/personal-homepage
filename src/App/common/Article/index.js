import React from 'react'
import { Container, Description, ExtraHeaderContent, StyledArticle } from './styled';

const Article = ({ extraHeaderContent, title, description, extraContent, image }) => (
    <StyledArticle>
        {image}
        <Container>
            <ExtraHeaderContent>
                {extraHeaderContent}
            </ExtraHeaderContent>
            {title}
            <Description>
                {description}
            </Description>
            {extraContent}
        </Container>
    </StyledArticle>
);

export default Article;