import React from 'react';
import { Button } from 'react-bootstrap';
import image from '../../../images/young-handsome-physician-medical-robe-with-stethoscope.jpg';
import './Banner.css';

const Banner = () => {
	return (
		<div
			className="img-container lh-lg d-flex align-items-center justify-content-center text-start p-4"
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className="banner">
				<h1 className="banner-heading">ShobujUddan Medical Hospital</h1>
				<h5>Welcome to our medical care centre</h5>
				<h1>We take care our patients Health.</h1>
				<p className="banner-text fs-5">
					I realize thet becoming a doctor, I can help a small comunity, But becoming a doctor I can help my
					whole country.
				</p>
				<Button className="btn btn-primary">About us</Button>
			</div>
		</div>
	);
};

export default Banner;
