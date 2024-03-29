import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Certificates from '../pages/Certificates';
import Dashboard from '../pages/Dashboard';
import ProjectDetails from '../pages/ProjectDetails';

const Routes: React.FunctionComponent = () => (
	<Switch>
		<Route path="/" exact component={Dashboard} />
		<Route path="/certificates" component={Certificates} />
		<Route path="/project/:projectName" component={ProjectDetails} />
		<Redirect from="*" to="/" />
	</Switch>
);

export default Routes;
