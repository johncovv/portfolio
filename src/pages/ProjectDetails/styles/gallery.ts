import styled, { css } from 'styled-components';

import { VscChromeClose } from 'react-icons/vsc';

import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from 'react-icons/io';

import LoadingGIF from '../../../assets/static/loading.gif';

export const Content = styled.div`
	margin-top: 50px;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
	gap: 25px;

	@media (min-width: 560px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(5, 1fr);
	}
`;

export const ImageItem = styled.div`
	height: 0;
	padding-top: 100%;
	position: relative;
	cursor: pointer;

	&:first-child {
		@media (min-width: 768px) {
			grid-column-start: 1;
			grid-column-end: 3;
			grid-row-start: 1;
			grid-row-end: 3;
		}
	}
`;

export const ImageItemContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const Source = styled.img`
	width: 100%;
	height: 100%;
	display: block;
	object-fit: cover;

	transition: transform 200ms;

	box-shadow: ${({ theme }) => theme.shadow.default};
	border-radius: 8px;

	background-image: url(${LoadingGIF});
	background-size: 20px;
	background-repeat: no-repeat;
	background-position: center;

	&:hover {
		transform: scale(1.05);
	}
`;

// popup image

interface PopupAttr {
	active: boolean;
}

export const PopupContent = styled.div<PopupAttr>`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 10000;

	background-color: rgba(0, 0, 0, 0.7);
	backdrop-filter: blur(7px);
	padding: 70px 25px 25px;
	transition: 200ms;

	${({ active }) =>
		active
			? css`
					opacity: 1;
			  `
			: css`
					opacity: 0;
					pointer-events: none;
			  `}

	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column nowrap;
`;

export const PopupCloseButton = styled(VscChromeClose).attrs({
	size: 50,
})`
	fill: ${({ theme }) => theme.colors.orange};

	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;

	transition: transform 200ms;

	&:hover {
		transform: scale(1.1);
	}
`;

export const PopupImageContainer = styled.div`
	max-width: 1024px;
	width: 100%;
	height: calc(100% - (22px + 15px));

	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	user-select: none;
`;

export const PopupTitle = styled.strong`
	margin-bottom: 15px;
	font-size: 18px;
	color: ${({ theme }) => theme.colors.orange};
`;

export const PopupImage = styled.img`
	max-width: 100%;
	max-height: 100%;
	border-radius: 8px;
`;

interface ArrowAttr {
	$active: boolean;
}

export const PopupArrayPrevious = styled(IoIosArrowDropleftCircle).attrs({
	size: 50,
})<ArrowAttr>`
	position: absolute;
	z-index: 1000;
	top: 50%;
	left: 5px;
	transform: translateY(-50%);

	transition: fill 200ms;

	fill: ${({ theme }) => theme.colors.white};
	filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));

	${({ $active }) =>
		$active
			? css`
					cursor: pointer;
					&:hover {
						fill: ${({ theme }) => theme.colors.orange};
					}
			  `
			: css`
					opacity: 0.3;
			  `}
`;

export const PopupArrayNext = styled(IoIosArrowDroprightCircle).attrs({
	size: 50,
})<ArrowAttr>`
	position: absolute;
	z-index: 1000;
	top: 50%;
	right: 5px;
	transform: translateY(-50%);

	transition: fill 200ms;

	fill: ${({ theme }) => theme.colors.white};
	filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));

	${({ $active }) =>
		$active
			? css`
					cursor: pointer;
					&:hover {
						fill: ${({ theme }) => theme.colors.orange};
					}
			  `
			: css`
					opacity: 0.3;
			  `}
`;
