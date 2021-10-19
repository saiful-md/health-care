import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
	const { id, img, name, description } = props.service;
	return (
		<Col className="card-transform">
			<Card className="card-border">
				<Card.Img className="service-img" variant="top" src={img} />
				<Card.Body className="p-5 card-body">
					<Card.Title>{name}</Card.Title>
					<Card.Text>{description}</Card.Text>
					<Link to={`/read/${id}`}>
						<button className="btn btn-primary">Read more</button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Service;
