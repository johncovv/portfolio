import styled from 'styled-components';
import { shade } from 'polished';

import ReactMarkdown from 'react-markdown';

export const Content = styled.div``;

export const Title = styled.h1`
	margin-bottom: 25px;
`;

export const ButtonContainer = styled.div`
	margin: 0 0 25px;
	display: flex;
	flex-flow: row nowrap;
`;

export const Button = styled.button`
	font-family: 'JetBrainsMono Bold';
	background-color: ${({ theme }) => theme.colors.orange};
	border: none;
	color: ${({ theme }) => theme.colors.dark};
	border-radius: 8px;
	padding: 10px;
	font-size: 12px;
	margin-right: 15px;

	svg {
		margin-right: 5px;
	}

	display: flex;
	align-items: center;

	transition: transform 100ms, background-color 200ms;

	&:hover {
		transform: scale(1.05);
		background-color: ${({ theme }) => shade(0.2, theme.colors.orange)};
	}
`;

export const About = styled(ReactMarkdown)`
	white-space: pre-line;
	color: ${({ theme }) => theme.text.secondary};
`;

interface AlertProps {
	type: 'error' | 'warning' | 'success';
}

const alertTypes = {
	error: '#ff3434',
	warning: '#ff8934',
	success: '#34ff60',
};

export const Alert = styled.p<AlertProps>`
	font-size: 14px;
	color: ${({ type }) => alertTypes[type]};
	margin-bottom: 10px;

	display: flex;
	align-items: center;

	svg {
		margin-right: 5px;
	}
`;

// partners

export const PartnersGroup = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-top: 25px;
`;

export const PartnersGroupTitle = styled.h4``;

export const Partner = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-left: 15px;
	margin-top: 10px;
`;

export const PartnerName = styled.a.attrs({
	rel: 'noopener noreferrer',
	target: '_blank',
})`
	color: ${({ theme }) => theme.colors.orange};
`;

export const PartnerJob = styled.p`
	color: ${({ theme }) => theme.text.secondary};
`;

// technologies

export const TechnologiesGroup = styled.div`
	display: flex;
	flex-flow: column nowrap;

	margin-top: 25px;
`;

export const TechnologiesTitle = styled.h4``;

export const Technologie = styled.a.attrs({
	rel: 'noopener noreferrer',
	target: '_blank',
})`
	color: ${({ theme }) => theme.colors.orange};
	margin-top: 5px;
	width: fit-content;

	transition: margin-left 200ms;

	&:hover {
		margin-left: 5px;
	}
`;