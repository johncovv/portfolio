import styled from 'styled-components';

export const Content = styled.div`
	margin-top: 25px;

	display: grid;
	grid-template-columns: 100%;
	gap: 25px;

	@media (min-width: 1024px) {
		grid-template-columns: repeat(5, 1fr);
	}
`;

interface SKillAttr {
	color: string;
}

export const Skill = styled.div<SKillAttr>`
	border: 2px solid ${(props) => props.color};
	border-radius: 8px;
	padding: 10px;
	cursor: pointer;

	/* center */
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		margin-right: 10px;
	}

	transition: background-color 200ms, transform 200ms;

	&:hover {
		transform: scale(1.05);
		background-color: ${(props) => props.color};
		color: #000;

		svg {
			fill: #000;
		}
	}
`;
