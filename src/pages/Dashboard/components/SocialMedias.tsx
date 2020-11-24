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
		window.open(link, '_target');
	}

	return (
		<Content>
			<FacebookButton
				color="#4064AC"
				onClick={() => {
					handleOpenLink('https://facebook.com/johncovv');
				}}
			/>
			<TwitterButton
				color="#29A4D9"
				onClick={() => {
					handleOpenLink('https://twitter.com/johncovv');
				}}
			/>
			<DiscordButton
				color="#7085D5"
				onClick={() => {
					handleOpenLink('https://discord.com/users/426609168217276417');
				}}
			/>
			<WhatsappButton
				color="#55DB87"
				onClick={() => {
					handleOpenLink('http://sendwpp.tk/17992392708');
				}}
			/>
			<LinkedinButton
				color="#0A66C2"
				onClick={() => {
					handleOpenLink('https://www.linkedin.com/in/johncovv/');
				}}
			/>
		</Content>
	);
};

export default SocialMedias;
