import styled from 'styled-components';

import { shade } from 'polished';

import { FaGithub } from 'react-icons/fa';

export const Content = styled.button`
	background-color: #ff8934;
	border-radius: 8px;
	margin-top: 25px;
	border: none;
	padding: 15px;

	display: flex;
	flex-flow: row;
	align-items: center;

	transition: transform 200ms, background-color 200ms;

	&:hover {
		transform: translateX(10px);
		background-color: ${shade(0.2, '#ff8934')};
	}
`;

export const Text = styled.p`
	font-family: 'JetBrainsMono Bold';
	color: #000;
	margin-left: 10px;
`;

export const Icon = styled(FaGithub)`
	width: 25px;
	height: 25px;
	fill: #000;
`;
