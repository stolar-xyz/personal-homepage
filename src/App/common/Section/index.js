import React from 'react'
import { StyledSection } from './styled';

const Section = ({ title, body }) => (
    <StyledSection>
        {title}
        {body}
    </StyledSection>
);

export default Section;