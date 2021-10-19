import { Button } from 'react-bootstrap';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
	return (
		<div className="m-5">
			<h2 className="text-center mb-4">Contact Us</h2>
			<div className="text-center">
				{/* ifram location  */}
				<iframe
					title="signboard"
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116667.8254459139!2d90.38394920000005!3d23.965052799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1633324284963!5m2!1sen!2sbd"
					width="80%"
					height="450"
					loading="lazy"
				/>
			</div>
			<div className="my-5 ">
				{/* contact conatner  */}
				<Container>
					<Row>
						<Col>
							<div>
								<h4>XYZ road, Saignboard</h4>
								<p>Gazipur, Dhaka, Bangladesh</p>
							</div>
							<div>
								<h4>+885 66 83 444</h4>
							</div>
							<div>
								<h4>Shobujuddan.medical@hospital.com</h4>
								<p>Email us for online service</p>
							</div>
						</Col>
						<Col>
							{/* form part of the contact page  */}

							<h5>If you have any confution. Please fill up bellow form and send your massage.</h5>
							<Form>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="name@example.com" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
									<Form.Label>Example textarea</Form.Label>
									<Form.Control as="textarea" rows={3} />
								</Form.Group>
								<Button variant="success">Send</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Contact;
