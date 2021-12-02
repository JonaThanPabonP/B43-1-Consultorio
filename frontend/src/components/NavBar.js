import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";

import imagen from "../assets/img/logo.png";

const NavBar = () => {
  var route = "/";
  var user = JSON.parse(localStorage.getItem("user"));
  var navLinks = (
    <Nav>
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="/user-login">Usuario</Nav.Link>
      <Nav.Link href="/med-login">Médico</Nav.Link>
      <Nav.Link href="/contact">Contacto</Nav.Link>
    </Nav>
  );

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.clear();
  };

  if (user != undefined) {
    if (user.type == "paciente") {
      route = "/user-home";
    } else if (user.type == "médico") {
      route = "/med-home";
    }

    navLinks = (
      <Nav>
        <Nav.Link href="#">
          <strong>{user.name}</strong>
        </Nav.Link>
        <Nav.Link href="#">
          <Image src={user.photoUrl} width="30px" height="30px" roundedCircle />
        </Nav.Link>

        <NavDropdown title=" " id="basic-nav-dropdown">
          <NavDropdown.Item href="/contact">Contacto</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/" onClick={logOut}>
            Salir
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href={route}>
            <Image src={imagen} width="54" height="30" fluid /> Consultorio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            {navLinks}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
