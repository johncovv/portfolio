import styled, { createGlobalStyle } from 'styled-components';

import JetBrainsMonoRegular from '../assets/fonts/JetBrainsMono-Regular.ttf';
import JetBrainsMonoBold from '../assets/fonts/JetBrainsMono-Bold.ttf';

export default createGlobalStyle`
	@font-face {
		font-family: 'JetBrainsMono Regular';
		src: url(${JetBrainsMonoRegular});
		font-weight: 300;
	}

	@font-face {
		font-family: 'JetBrainsMono Bold';
		src: url(${JetBrainsMonoBold});
		font-weight: 700;
	}

	::selection {
		background-color: rgba(255, 137, 52, 0.31);
		color: ${({ theme }) => theme.text.primary};
	}

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		background-color: ${({ theme }) => theme.background.primary};
		color: ${({ theme }) => theme.text.primary};
		font-size: 16px;
		line-height: 1.35;
	}

	body, button, a {
		font-family: 'JetBrainsMono Regular';
	}

	a {
		color: ${({ theme }) => theme.text.primary};
		width: fit-content;

		&:hover {
			text-decoration: underline;
		}
	}

	button, a {
		text-decoration: none;
		cursor: pointer;
	}
`;

export const AppContainer = styled.div`
	/* center container */
	padding: calc(50px + 75px) 20px 0;
	@media (min-width: 1024px) {
		padding: calc(50px + 75px) 20px 0;
	}

	max-width: 1000px;
	margin: 0 auto;
`;
