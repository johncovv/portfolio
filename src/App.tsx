import React, { useCallback, useState } from 'react';

import { ThemeProvider } from 'styled-components';

// page
import Dashboard from './pages/Dashboard';

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
			<Header
				isDark={currentTheme === 'dark'}
				toggleTheme={() => toggleTheme()}
			/>
			<Dashboard />
			<BackToTop />
			<GlobalStyles />
		</ThemeProvider>
	);
};

export default App;
