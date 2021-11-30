import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

import imagen from "../assets/img/logo.png";

const NavbarUserMed = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Image src={imagen} width="54" height="30" fluid />{' '}
            Consultorio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarUserMed;
