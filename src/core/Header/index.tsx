import React from 'react';

import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import {
	Container,
	Content,
	Item,
	Logo,
	NavItems,
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
	const { push } = useHistory();

	const handleLogoClick = (): void => {
		push('/');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const navigateTo = (params: { hash?: string; pathname: string }): void => {
		const { pathname, hash } = params;

		push({
			pathname,
			state: { scrollTo: hash || '' },
		});
	};

	return (
		<Content>
			<Container>
				<Logo onClick={handleLogoClick} />

				<NavItems>
					<Item onClick={() => navigateTo({ pathname: '/', hash: 'skills' })}>
						Skills
					</Item>
					<Item onClick={() => navigateTo({ pathname: '/', hash: 'projects' })}>
						Projetos
					</Item>

					<TogglerButton onClick={toggleTheme}>
						{isDark ? <IoMdSunny size={29} /> : <IoMdMoon size={29} />}
					</TogglerButton>
				</NavItems>
			</Container>
		</Content>
	);
};

export default Header;
