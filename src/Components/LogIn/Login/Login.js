import React from 'react';
import useFirebase from '../../Hook/UseFirebase/UseFirebase';

const Login = () => {
	const { googleSingIn } = useFirebase();
	return (
		<div className="my-5">
			<h2>Please log In</h2>
			<button onClick={googleSingIn} className="btn btn-primary mx-5">
				google sign in
			</button>
		</div>
	);
};

export default Login;
