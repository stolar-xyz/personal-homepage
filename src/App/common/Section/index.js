import React from 'react'
import Subheader from '../Subheader';
import { StyledSection } from './styled';

const Section = ({ title, body }) => (
    <StyledSection>
        <Subheader>
            {title}
        </Subheader>
        {body}
    </StyledSection>
);

export default Section;