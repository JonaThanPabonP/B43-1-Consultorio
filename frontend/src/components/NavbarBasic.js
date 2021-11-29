import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

import imagen from "../assets/img/logo.png";

const NavBarBasic = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Image src={imagen} width="54" height="30" fluid />
            Consultorio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="">Inicio</Nav.Link>
              <Nav.Link href="">Usuario</Nav.Link>
              <Nav.Link href="">Médico</Nav.Link>
              <Nav.Link href="">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarBasic;
