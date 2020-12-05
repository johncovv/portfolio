import styled from 'styled-components';

export const Content = styled.div`
	position: relative;
`;

export const LogoTitle = styled.div`
	& > p {
		font-size: 18px;
	}

	& > p.primary {
		font-size: 55px;
		font-family: 'JetBrainsMono Bold';

		@media (max-width: 767px) {
			display: flex;
			flex-flow: column nowrap;

			& > span {
				margin-left: 0 !important;
				margin-bottom: 10px;
			}
		}

		& > span {
			font-size: 18px;
			color: ${({ theme }) => theme.colors.orange};
			margin-left: 10px;
		}
	}

	margin-bottom: 50px;
`;

export const About = styled.p`
	font-family: 'JetBrainsMono Bold';
	font-size: 18px;

	color: ${({ theme }) => theme.text.secondary};
	margin-bottom: 30px;

	span {
		color: ${({ theme }) => theme.text.primary};
	}

	span.primary {
		color: ${({ theme }) => theme.colors.orange};
	}
`;

export const Title = styled.p`
	font-family: 'JetBrainsMono Bold';
	margin-top: 25px;
	font-size: 22px;
`;
