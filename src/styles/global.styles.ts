import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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

		::-webkit-scrollbar {
			width: 0.75rem;
		}

		::-webkit-scrollbar-track {
			background-color: ${({ theme }) => theme.background.secondary};
		}

		::-webkit-scrollbar-thumb {
			background-color: ${({ theme }) => theme.colors.orange};

			border-top-left-radius: 0.5rem;
			border-bottom-left-radius: 0.5rem;
		}
	}

	body, button, a {
		font-family: 'JetBrains Mono', monospace;
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
