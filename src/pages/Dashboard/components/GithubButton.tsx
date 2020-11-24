import React from 'react';

import { Content, Icon, Text } from '../styles/github-button';

const GithubButton: React.FunctionComponent = ({ children }) => (
	<Content>
		<Icon />
		<Text>{children}</Text>
	</Content>
);

export default GithubButton;
