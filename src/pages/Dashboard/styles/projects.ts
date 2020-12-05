import styled from 'styled-components';

import { shade } from 'polished';

export const Content = styled.div`
	margin-top: 25px;

	display: grid;
	grid-template-columns: 100%;
	gap: 25px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Project = styled.div`
	position: relative;

	background-color: ${({ theme }) => theme.background.secondary};
	border-radius: 8px;
	padding: 10px;

	&:first-child {
		@media (min-width: 768px) {
			grid-column-start: 1;
			grid-column-end: 3;
		}

		@media (min-width: 1024px) {
			grid-column-start: 1;
			grid-column-end: 4;
		}
	}
`;

export const Title = styled.p`
	margin-bottom: 15px;
	font-family: 'JetBrainsMono Bold';
`;

export const Description = styled.p`
	font-size: 14px;
	color: ${({ theme }) => theme.text.secondary};

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 5; /* number of lines to show */
	-webkit-box-orient: vertical;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
`;

export const ButtonLink = styled.button`
	font-family: 'JetBrainsMono Bold';
	background-color: ${({ theme }) => theme.colors.orange};
	margin-top: 15px;
	border: none;
	color: ${({ theme }) => theme.colors.dark};
	border-radius: 8px;
	margin-right: 15px;
	padding: 10px;
	font-size: 12px;

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

export const ButtonProject = styled.button`
	font-family: 'JetBrainsMono Bold';
	background-color: ${({ theme }) => theme.colors.orange};
	margin-top: 15px;
	border: none;
	color: ${({ theme }) => theme.colors.dark};
	border-radius: 8px;
	padding: 10px;
	font-size: 12px;

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
