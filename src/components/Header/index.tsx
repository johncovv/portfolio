import React from 'react';

import { Content, Container, Logo, NavItems, Item } from './styles';

const Header: React.FunctionComponent = () => {
	return (
		<Content>
			<Container>
				<Logo />

				<NavItems>
					<Item href="#skills">Skills</Item>
					<Item href="#projects">Projetos</Item>
				</NavItems>
			</Container>
		</Content>
	);
};

export default Header;
