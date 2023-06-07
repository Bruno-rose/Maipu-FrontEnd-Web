import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Products from './components/Products';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/login' exact component={Login} />
			<Route path='/admin' component={Dashboard} />
			<Route path='/users' component={Users} />
			<Route path='/products' component={Products} />
		</Switch>
	);
};

export default Routes;