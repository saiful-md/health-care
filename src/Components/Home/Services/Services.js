import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../Hook/Hooks/Hooks';
import Service from '../Service/Service';

const Services = () => {
	const [
		services
	] = useData();
	return (
		<div id="services">
			<h1 className="mt-5">Our Services</h1>
			<Row xs={1} md={3} className="g-5 p-5">
				{services.map((service) => <Service key={service.id} service={service} />)}
			</Row>
		</div>
	);
};

export default Services;
