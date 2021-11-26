import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBarBasic = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="../assets/img/logo.png"
              width="54"
              height="30"
              className="d-inline-block align-top"
            />{" "}
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
