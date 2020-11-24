import React from 'react';

import { Content, Icon, Text } from '../styles/github-button';

const GithubButton: React.FunctionComponent = ({ children }) => (
	<Content
		onClick={() => window.open('https://github.com/johncovv', '_target')}
	>
		<Icon />
		<Text>{children}</Text>
	</Content>
);

export default GithubButton;
