import React from "react";
import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";

import { addMed } from "../apis/crudMed";

const MedRegisterCard = () => {
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
      // photo: user.photoUrl,
      // id: user.mid,
    };

    addMed(obj, (res) => {
      console.log(res);
      if (res == "Success to create an med") {
        user.flagNewUser = false;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/med-home";
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
        <Form onSubmit={save} >
          <FloatingLabel
            label="Nombre completo"
            className="mb-3"
            controlId="name"
          >
            <Form.Control type="text" required/>
          </FloatingLabel>
          <Row>
            <Col>
              <FloatingLabel
                label="Tipo de documento"
                className="mb-3"
                controlId="docType"
              >
                <Form.Select aria-label="Floating label select example" required>
                  <option></option>
                  <option value="cc">Cédula de Ciudadanía</option>
                  <option value="ti">Tarjeta de Identidad</option>
                  <option value="ce">Cédula de Extranjería</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                label="Número de documento"
                className="mb-3"
                controlId="docNumber"
              >
                <Form.Control type="text" required/>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel
                label="Especialidad"
                className="mb-3"
                controlId="spec"
              >
                <Form.Select aria-label="Floating label select example" required>
                  <option></option>
                  <option value="mg">Medicina General</option>
                  <option value="c">Cardiología</option>
                  <option value="rx">Rayos X</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                label="Registro médico"
                className="mb-3"
                controlId="regNumber"
              >
                <Form.Control type="text" required/>
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel
            label="Correo electrónico"
            className="mb-3"
            controlId="email"
          >
            <Form.Control type="email" required/>
          </FloatingLabel>
          <FloatingLabel
            label="Confirmar correo electrónico"
            className="mb-3"
            controlId="confEmail"
          >
            <Form.Control type="email" required/>
          </FloatingLabel>
          <Row>
            <Col>
              <FloatingLabel
                label="Nueva contraseña"
                className="mb-3"
                controlId="pass"
              >
                <Form.Control type="password" required/>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                label="Confirmar contraseña"
                className="mb-3"
                controlId="confPass"
              >
                <Form.Control type="password" required/>
              </FloatingLabel>
            </Col>
          </Row>
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

export default MedRegisterCard;
