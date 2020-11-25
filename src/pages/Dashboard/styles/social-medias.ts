import styled from 'styled-components';

import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';

import { FaWhatsapp, FaDiscord, FaLinkedin } from 'react-icons/fa';

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	margin-top: 15px;

	svg {
		transition: transform 200ms;

		&:hover {
			cursor: pointer;
			transform: scale(1.2);
		}

		&:not(:first-child) {
			margin-left: 10px;
		}
	}
`;

export const FacebookButton = styled(IoLogoFacebook).attrs({
	size: 30,
})``;

export const TwitterButton = styled(IoLogoTwitter).attrs({
	size: 30,
})``;

export const DiscordButton = styled(FaDiscord).attrs({
	size: 30,
})``;

export const WhatsappButton = styled(FaWhatsapp).attrs({
	size: 30,
})``;

export const LinkedinButton = styled(FaLinkedin).attrs({
	size: 30,
})``;
