import React from 'react';

import { Content, Icon, Text } from '../styles/email-button';

const EmailButton: React.FunctionComponent = ({ children }) => (
	<Content href="mailto:contato@johncovv.com">
		<Icon />
		<Text>{children}</Text>
	</Content>
);

export default EmailButton;
