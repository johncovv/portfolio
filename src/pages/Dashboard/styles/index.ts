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
	}

	margin-bottom: 50px;
`;

export const About = styled.p`
	font-family: 'JetBrainsMono Bold';
	font-size: 18px;

	color: #aaaaaa;
	margin-bottom: 30px;

	span {
		color: #ffffff;
	}

	span.primary {
		color: #ff8934;
	}
`;

export const Title = styled.p`
	font-family: 'JetBrainsMono Bold';
	margin-top: 25px;
	font-size: 22px;
`;
