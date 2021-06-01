import React from 'react';

import SocialMedias from '../SocialMedias';

import { Content, Info } from './styles';

const Footer: React.FunctionComponent = () => (
	<Content>
		<Info>
			<a
				href="https://twitter.com/johncovv"
				target="_blank"
				rel="noopener noreferrer"
			>
				@johncovv
			</a>{' '}
			- Desenvolvido em 2020/2021
		</Info>

		<SocialMedias sizeIcons={25} showEmail />
	</Content>
);

export default Footer;
