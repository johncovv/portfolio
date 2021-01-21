import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import ProjectDetails from '../pages/ProjectDetails';

const Routes: React.FunctionComponent = () => (
	<Switch>
		<Route path="/" exact component={Dashboard} />
		<Route path="/project/:projectName" component={ProjectDetails} />
	</Switch>
);

export default Routes;
