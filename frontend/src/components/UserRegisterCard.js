import React from "react";
import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";

import { addUser } from '../apis/crudUser'

const UserRegisterCard = () => {

  var user = JSON.parse(localStorage.getItem("user"));

  function save(even) {
    even.preventDefault();
    const obj = {
      name: even.target[0].value,
      docType: even.target[1].value,
      docNumber: even.target[2].value,
      spec: even.target[3].value,
      regNumber: even.target[4].value,
      email: even.target[5].value,
      confEmail: even.target[6].value,
      pass: even.target[6].value,
      confPass: even.target[6].value,
      photo: user.photoUrl,
      id: user.uid,
    };

    addUser(obj, (res) => {
      console.log(res);
      if (res == "Success") {
        user.flagNewUser = false;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/home";
      } else {
        alert("Algo salió mal, vuelve a intentarlo");
      }
    });
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
            <Form.Control type="text" />
          </FloatingLabel>
          <Row>
            <Col>
              <FloatingLabel label="Tipo de documento" className="mb-3">
                <Form.Select aria-label="Floating label select example">
                  <option></option>
                  <option value="1">Cédula de Ciudadanía</option>
                  <option value="2">Tarjeta de Identidad</option>
                  <option value="3">Cédula de Extranjería</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Número de documento" className="mb-3">
                <Form.Control type="text" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Fecha de nacimiento" className="mb-3">
                <Form.Control type="date" />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Género" className="mb-3">
                <Form.Select aria-label="Floating label select example">
                  <option></option>
                  <option value="1">Femenino</option>
                  <option value="2">Masculino</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Dirección" className="mb-3">
                <Form.Control type="text" />
              </FloatingLabel>
            </Col>
            <Col>
            <FloatingLabel label="Número de teléfono" className="mb-3">
                <Form.Control type="text" />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel label="Correo electrónico" className="mb-3">
            <Form.Control type="email" />
          </FloatingLabel>
          <FloatingLabel label="Confirmar correo electrónico" className="mb-3">
            <Form.Control type="email" />
          </FloatingLabel>
          <Row>
            <Col>
              <FloatingLabel label="Nueva contraseña" className="mb-3">
                <Form.Control type="password" />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Confirmar contraseña" className="mb-3">
                <Form.Control type="password" />
              </FloatingLabel>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
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
