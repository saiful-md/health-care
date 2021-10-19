import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hook/UseAuth/UseAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
	const { user, logOut, googleSingIn } = useAuth();
	return (
		<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
			<Container className="">
				<Navbar.Brand href="#home">S-M-H</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav.Link as={HashLink} to="/home#home">
						Home
					</Nav.Link>
					<Nav.Link as={HashLink} to="/home#services">
						Services
					</Nav.Link>
					<Nav.Link as={HashLink} to="/contact">
						Contact
					</Nav.Link>
					<Nav.Link as={HashLink} to="/about">
						About
					</Nav.Link>
					{user.displayName ? (
						<Button onClick={logOut} variant="danger">
							Logout
						</Button>
					) : (
						<Nav.Link as={HashLink} to="/login">
							Login
						</Nav.Link>
					)}
					<Navbar.Text>Signed in {user.displayName}</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
