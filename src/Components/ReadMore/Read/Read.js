import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Read = () => {
	const { readId } = useParams();

	return (
		<div className="m-5">
			<h1>read more.. {readId}</h1>

			<Link to="/home">
				<button className="btn btn-primary">go back</button>
			</Link>
		</div>
	);
};

export default Read;
