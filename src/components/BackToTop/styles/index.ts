import styled from 'styled-components';

import { shade } from 'polished';

export const Content = styled.div`
	position: fixed;
	bottom: -3px;
	right: -3px;

	padding: 15px 10px 10px 15px;
	border-top-left-radius: 50px;
	background-color: #282929;

	box-shadow: 0 0 rgba(0, 0, 0, 0), -5px -5px 10px rgba(0, 0, 0, 0.2);

	transition: background-color 200ms;
	cursor: pointer;

	&:hover {
		background-color: ${shade(0.2, '#282929')};
	}
`;
