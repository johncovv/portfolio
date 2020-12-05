import React from 'react';

import GlobalStyles from './styles/global.styles';

// components
import Header from './components/Header';
import BackToTop from './components/BackToTop';

// page
import Dashboard from './pages/Dashboard';

const App: React.FunctionComponent = () => {
	return (
		<>
			<Header />
			<Dashboard />
			<BackToTop />
			<GlobalStyles />
		</>
	);
};

export default App;
