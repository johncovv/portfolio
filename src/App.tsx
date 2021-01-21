import React, { useCallback, useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

// page
import Routes from './routes';

// components
import Header from './components/Header';
import BackToTop from './components/BackToTop';

// themes
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

// styles
import GlobalStyles from './styles/global.styles';

const App: React.FunctionComponent = () => {
	const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>(() => {
		const localTheme = localStorage.getItem('JC@theme');

		if (localTheme) return localTheme as 'dark' | 'light';

		return 'dark';
	});

	const toggleTheme = useCallback(() => {
		setCurrentTheme((state) => {
			if (state === 'dark') {
				localStorage.setItem('JC@theme', 'light');
				return 'light';
			}

			localStorage.setItem('JC@theme', 'dark');
			return 'dark';
		});
	}, []);

	return (
		<ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
			<BrowserRouter>
				<Header
					isDark={currentTheme === 'dark'}
					toggleTheme={() => toggleTheme()}
				/>

				<Routes />

				<BackToTop />
			</BrowserRouter>
			<GlobalStyles />
		</ThemeProvider>
	);
};

export default App;
