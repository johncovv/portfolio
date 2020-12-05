import { createGlobalStyle } from 'styled-components';

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

		/* center container */
		padding: calc(100px + 75px) 20px 20px;
		@media (min-width: 1024px) {
			padding: calc(100px + 75px) 20px 50px;
		}

		max-width: 1000px;
		margin: 0 auto;
	}

	body, button, a {
		font-family: 'JetBrainsMono Regular';
	}

	a:hover {
		text-decoration: underline;
	}

	button, a {
		text-decoration: none;
		cursor: pointer;
	}
`;
