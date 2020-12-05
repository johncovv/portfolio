import React from 'react';

import { IoMdSunny, IoMdMoon } from 'react-icons/io';

import {
	Content,
	Container,
	Logo,
	NavItems,
	Item,
	TogglerButton,
} from './styles';

interface HeaderProps {
	isDark: boolean;
	toggleTheme(): void;
}

const Header: React.FunctionComponent<HeaderProps> = ({
	isDark,
	toggleTheme,
}: HeaderProps) => {
	return (
		<Content>
			<Container>
				<Logo />

				<NavItems>
					<Item href="#skills">Skills</Item>
					<Item href="#projects">Projetos</Item>

					<TogglerButton onClick={toggleTheme}>
						{isDark ? <IoMdSunny size={29} /> : <IoMdMoon size={29} />}
					</TogglerButton>
				</NavItems>
			</Container>
		</Content>
	);
};

export default Header;
