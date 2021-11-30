import React from "react";
import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";

const UserRegisterCard = () => {
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
        <Form>
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
              <FloatingLabel label="Especialidad" className="mb-3">
                <Form.Select aria-label="Floating label select example">
                  <option></option>
                  <option value="1">Especialidad 1</option>
                  <option value="2">Especialidad 2</option>
                  <option value="3">Especialidad 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Registro médico" className="mb-3">
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
            <Button variant="outline-danger" type="submit">
              Limpiar
            </Button>
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
