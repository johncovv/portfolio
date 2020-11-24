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

	body {
		background-color: #232323;
		color: #ffffff;
		font-size: 16px;

		/* center container */
		padding: 50px 20px;
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

		&:hover {
			cursor: pointer;
		}
	}
`;
