import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (<div>
        <Navbar sticky="top" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='fw-bold text-gray'
                            as={Link} to="/"> HOME </Nav.Link>
                        <Nav.Link className='fw-bold text-gray'
                            as={Link} to="/reviews"> REVIEWS </Nav.Link>
                        <Nav.Link className='fw-bold text-gray'
                            as={Link} to="/dashboard"> DASHBOARD </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
};

export default Header;