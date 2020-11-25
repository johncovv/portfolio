import styled from 'styled-components';

import { IoMdMail } from 'react-icons/io';

export const Content = styled.a`
	margin-top: 15px;
	width: fit-content;

	display: flex;
	flex-flow: row;
	align-items: center;

	transition: transform 200ms;
	color: #fff;

	&:hover {
		transform: translateX(10px);
	}
`;

export const Text = styled.p`
	font-family: 'JetBrainsMono Bold';
	margin-left: 10px;
	font-size: 18px;
	color: #fff;
`;

export const Icon = styled(IoMdMail)`
	height: 25px;
	width: 25px;
	fill: #fff;
`;
