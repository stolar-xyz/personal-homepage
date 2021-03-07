import React from 'react'
import { StyledSection, SubHeader } from './styled';

const Section = ({ title, body }) => (
    <StyledSection>
        <SubHeader>
            {title}
        </SubHeader>
        {body}
    </StyledSection>
);

export default Section;