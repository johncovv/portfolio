import React from 'react';

import GlobalStyles from './styles/global.styles';

import Dashboard from './pages/Dashboard';

const App: React.FunctionComponent = () => {
	return (
		<>
			<Dashboard />
			<GlobalStyles />
		</>
	);
};

export default App;
