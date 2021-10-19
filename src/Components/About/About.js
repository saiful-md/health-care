import { Button } from 'react-bootstrap';
import React from 'react';
import './About.css';

const About = () => {
	return (
		<div>
			<h3 className="text-center my-5">
				About <span className="text-success mx-4">ShobujUddan Medical Hospital</span>
			</h3>
			<div className="d-flex justify-content-between align-items-center m-5">
				<div className="about">
					<p>
						One of the most important factors about people’s lives is the information of, the use of, and
						the growing knowledge of medicine. Medicine is a form of art. It depends on how skillfully
						doctors apply their knowledge when dealing with patients. One of the most important factors
						about people’s lives is the information of, the use of, and the growing knowledge of medicine.
						Medicine is a form of art. It depends on how skillfully doctors apply their knowledge when
						dealing with patients.
					</p>
					<div className="text-center">
						<Button variant="outline-dark">Explore More</Button>
					</div>
				</div>
				<img src="https://i.ibb.co/y83xvM6/Doctor-checking-some-blood-samples.jpg" className="about" alt="" />
			</div>
		</div>
	);
};

export default About;
