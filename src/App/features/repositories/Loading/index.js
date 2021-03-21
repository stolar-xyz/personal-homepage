import React from 'react'
import { StyledLoading, Description, Loader } from './styled';

const Loading = () => (
	<StyledLoading>
		<Description>
			Please wait, projects are being loaded...
        </Description>
		<Loader />
	</StyledLoading>
);

export default Loading;