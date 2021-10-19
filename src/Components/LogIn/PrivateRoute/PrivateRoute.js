import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hook/UseAuth/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
	if (isLoading) {
		return <Spinner animation="border" />;
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)}
		/>
	);
};

export default PrivateRoute;
