import React from 'react';

import {
	Content,
	FacebookButton,
	TwitterButton,
	DiscordButton,
	WhatsappButton,
	LinkedinButton,
} from '../styles/social-medias';

const SocialMedias: React.FunctionComponent = () => {
	function handleOpenLink(link: string): void {
		window.open(link, '_blank');
	}

	return (
		<Content>
			<FacebookButton
				onClick={() => {
					handleOpenLink('https://facebook.com/johncovv');
				}}
			/>
			<TwitterButton
				onClick={() => {
					handleOpenLink('https://twitter.com/johncovv');
				}}
			/>
			<DiscordButton
				onClick={() => {
					handleOpenLink('https://discord.com/users/426609168217276417');
				}}
			/>
			<WhatsappButton
				onClick={() => {
					handleOpenLink('http://sendwpp.tk/17992392708');
				}}
			/>
			<LinkedinButton
				onClick={() => {
					handleOpenLink('https://www.linkedin.com/in/johncovv/');
				}}
			/>
		</Content>
	);
};

export default SocialMedias;
