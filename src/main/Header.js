import React from "react";
import {Button} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import MainColor from "./MainColor";


export default function Header(){

    let chooseColor = event => {
        MainColor.setColor(event.target.innerText);
    }

    return(
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Film rates</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <NavDropdown title="Theme" id="navbarScrollingDropdown">
                                <NavDropdown.Item onClick={chooseColor}>Primary</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Secondary</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Success</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Danger</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={chooseColor}>Warning</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Info</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Light</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Dark</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant={'outline-'+MainColor.getColor()}>Find!</Button>
                    </Form>
                </Container>
            </Navbar>
    );
}