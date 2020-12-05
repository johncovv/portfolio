import styled from 'styled-components';

import { shade } from 'polished';

import { ReactComponent as LogoImg } from '../../assets/static/logo.svg';

export const Content = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	background: ${({ theme }) => theme.background.secondary};
	height: 75px;
`;

export const Container = styled.div`
	max-width: 1000px;
	height: 100%;
	margin: 0 auto;
	padding: 0 20px;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled(LogoImg).attrs({ width: 49, height: 35 })`
	fill: ${({ theme }) => theme.colors.orange};

	transition: fill 200ms, transform 200ms;

	&:hover {
		fill: ${({ theme }) => shade(0.2, theme.colors.orange)};
		transform: scale(1.2);
	}
`;

export const NavItems = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

export const Item = styled.a`
	all: unset;
	margin-right: 25px;
	cursor: pointer;
	color: ${({ theme }) => theme.text.secondary};
	height: fit-content;
`;

export const TogglerButton = styled.button`
	all: unset;
	width: fit-content;
	height: fit-content;
	cursor: pointer;

	svg {
		fill: ${({ theme }) => theme.colors.orange};
	}
`;
