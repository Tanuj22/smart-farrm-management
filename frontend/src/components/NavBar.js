import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand={false}>
            <Container fluid>
                <Navbar.Brand href="/">Smart Farm Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Options</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/crop-prediction">Crop Prediction</Nav.Link>
                            <Nav.Link href="/disease-detection">Disease Detection</Nav.Link>
                            <NavDropdown title="Farm Management" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="/farm/resources">Resources</NavDropdown.Item>
                                <NavDropdown.Item href="/farm/crops">Crops</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavBar;