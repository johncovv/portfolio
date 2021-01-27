import React from 'react';

import SocialMedias from '../SocialMedias';

import { Content, Info } from './styles';

const Footer: React.FunctionComponent = () => (
	<Content>
		<Info>
			<span>@johncovv</span> - Desenvolvido em 2020/2021
		</Info>

		<SocialMedias size={25} />
	</Content>
);

export default Footer;
