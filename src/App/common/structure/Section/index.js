import React from 'react'
import Subheader from '../../styled/Subheader';
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