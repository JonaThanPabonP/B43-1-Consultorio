import React from "react";
import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";

import { addUser } from "../apis/crudUser";

const UserRegisterCard = () => {
  var user = JSON.parse(localStorage.getItem("user"));

  function save(even) {
    even.preventDefault();
    const obj = {
      name: even.target[0].value,
      docType: even.target[1].value,
      docNumber: even.target[2].value,
      birth: even.target[3].value,
      gender: even.target[4].value,
      address: even.target[5].value,
      phoneNumber: even.target[6].value,
      email: even.target[7].value,
      confEmail: even.target[8].value,
      pass: even.target[9].value,
      confPass: even.target[10].value,
      type: "paciente",
    };

    addUser(obj, (res) => {
      console.log(res);
      if (res == "Success") {
        user.flagNewUser = false;
        user = Object.assign(user, obj)
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/user-home";
      } else {
        alert("Algo salió mal, vuelve a intentarlo");
      }
    });
  }

  var nombre,
    correo = "";

  if (user != undefined) {
    nombre = user.name;
    correo = user.email;
  }

  return (
    <>
      <div
        style={{
          margin: "30px",
          padding: "20px",
          boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.3)",
          borderRadius: "25px",
        }}
      >
        <Form onSubmit={save}>
          <FloatingLabel label="Nombre completo" className="mb-3">
            <Form.Control type="text" value={nombre} required />
          </FloatingLabel>
          <Row>
            <Col>
              <FloatingLabel label="Tipo de documento" className="mb-3">
                <Form.Select
                  aria-label="Floating label select example"
                  required
                >
                  <option></option>
                  <option value="cc">Cédula de Ciudadanía</option>
                  <option value="ti">Tarjeta de Identidad</option>
                  <option value="ce">Cédula de Extranjería</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Número de documento" className="mb-3">
                <Form.Control type="text" required />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Fecha de nacimiento" className="mb-3">
                <Form.Control type="date" required />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Género" className="mb-3">
                <Form.Select
                  aria-label="Floating label select example"
                  required
                >
                  <option></option>
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Dirección" className="mb-3">
                <Form.Control type="text" required />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Número de teléfono" className="mb-3">
                <Form.Control type="text" required />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel label="Correo electrónico" className="mb-3">
            <Form.Control type="email" value={correo} required />
          </FloatingLabel>
          <FloatingLabel label="Confirmar correo electrónico" className="mb-3">
            <Form.Control type="email" value={correo} required />
          </FloatingLabel>
          <Row>
            <Col>
              <FloatingLabel label="Nueva contraseña" className="mb-3">
                <Form.Control type="password" required />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Confirmar contraseña" className="mb-3">
                <Form.Control type="password" required />
              </FloatingLabel>
            </Col>
          </Row>
          <p style={{ fontSize: "10px", color: "red" }}>
            * Todos los campos son requeridos.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button variant="success" type="submit">
              Registrar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default UserRegisterCard;
