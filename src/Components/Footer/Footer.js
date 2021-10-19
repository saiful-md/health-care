import React from 'react';
import { Col, Nav, NavLink, Row } from 'react-bootstrap';

const Footer = () => {
	return (
		<div className="text-white bg-primary p-4">
			<Row>
				<Col xs={12} md={8}>
					<h2>ShobujUddan Madical Hospital</h2>
					<address>Saignboard, Board-Bazar, Gazipur sadar</address>
					<p>post code: Gazipur -1704</p>
				</Col>
				<Col xs={12} md={4}>
					<NavLink>
						<Nav.Link className="text-white" href="#home">
							Home
						</Nav.Link>
						<Nav.Link className="text-white" href="#features">
							Services
						</Nav.Link>
						<Nav.Link className="text-white" href="#pricing">
							About
						</Nav.Link>
					</NavLink>
				</Col>
			</Row>
			<h6 className="text-white ">Copyright &copy; ShabujUddan University</h6>
		</div>
	);
};

export default Footer;
