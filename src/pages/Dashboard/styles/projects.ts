import styled from 'styled-components';

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
	cursor: pointer;

	border-radius: 8px;
	overflow: hidden;

	padding-top: 65%;
	height: 0;

	transition: transform 200ms;

	&:hover {
		transform: translateY(10px);
	}

	&:before {
		content: '';
		z-index: 5;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(
			-30deg,
			rgba(0, 0, 0, 0.7),
			rgba(0, 0, 0, 0)
		);
	}
`;

export const Thumbnail = styled.img`
	filter: drop-shadow(5px 5px 8px rgba(0, 0, 0, 0.15));

	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const Title = styled.p`
	z-index: 10;
	position: absolute;
	bottom: 15px;
	right: 15px;
`;
