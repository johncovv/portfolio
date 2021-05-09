import React, { HtmlHTMLAttributes } from 'react';

import {
	Content,
	FacebookButton,
	TwitterButton,
	DiscordButton,
	WhatsappButton,
	LinkedinButton,
} from './styles';

interface SocialMediasProps extends HtmlHTMLAttributes<HTMLDivElement> {
	size?: number;
}

const SocialMedias: React.FunctionComponent<SocialMediasProps> = ({
	size = 30,
	...rest
}: SocialMediasProps) => {
	function handleOpenLink(link: string): void {
		window.open(link, '_blank');
	}

	return (
		<Content {...rest}>
			<FacebookButton
				size={size}
				onClick={() => {
					handleOpenLink('https://facebook.com/johncovv');
				}}
			/>
			<TwitterButton
				size={size}
				onClick={() => {
					handleOpenLink('https://twitter.com/johncovv');
				}}
			/>
			<DiscordButton
				size={size}
				onClick={() => {
					handleOpenLink('https://discord.com/users/426609168217276417');
				}}
			/>
			<WhatsappButton
				size={size}
				onClick={() => {
					handleOpenLink('https://wa.me/5517992392708');
				}}
			/>
			<LinkedinButton
				size={size}
				onClick={() => {
					handleOpenLink('https://www.linkedin.com/in/johncovv/');
				}}
			/>
		</Content>
	);
};

export default SocialMedias;
