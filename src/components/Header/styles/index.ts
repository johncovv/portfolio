import styled from 'styled-components';

import { shade } from 'polished';

import { ReactComponent as LogoImg } from '../../../assets/static/logo.svg';

export const Content = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	background: #282929;
	height: 75px;
`;

export const Container = styled.div`
	max-width: 1000px;
	height: 100%;
	margin: 0 auto;
	padding: 0 20px;

	display: flex;
	flex-flow: row nowrap;
	align-self: center;
	justify-content: space-between;
`;

export const Logo = styled(LogoImg).attrs({ width: 49 })`
	fill: #ff8934;

	transition: fill 200ms, transform 200ms;

	&:hover {
		fill: ${shade(0.2, '#ff8934')};
		transform: scale(1.2);
	}
`;

export const NavItems = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-self: center;
`;

export const Item = styled.a`
	all: unset;
	margin-left: 25px;
	cursor: pointer;
	color: #aaaaaa;
`;
