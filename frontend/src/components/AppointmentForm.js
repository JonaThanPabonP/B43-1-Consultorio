import React from "react";
import { Form, Row, FloatingLabel, Col, Button } from "react-bootstrap";

import { addAppointment } from "../apis/crudAppos";

const AppointmentForm = () => {

  var user = JSON.parse(localStorage.getItem("user"));

  function save(even) {
    even.preventDefault();
    const obj = {
      date: even.target[0].value,
      hour: even.target[1].value,
      spec: even.target[2].value,
      med: even.target[3].value,
      userID: user.uid,
      userName: user.name,
    };

    addAppointment(obj, (res) => {
      console.log(res);
      if (res == "Success") {
        alert("Cita asignada correctamente.");
        window.location.href = "/user-home";
      } else {
        alert("Algo salió mal, vuelve a intentarlo");
      }
    });
  }


  return (
    <>
      <Form onSubmit={save}>
        <Row>
          <Col>
            <FloatingLabel label="Fecha" className="mb-3">
              <Form.Control type="date" required />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Hora" className="mb-3">
              <Form.Select aria-label="Floating label select example" required>
                <option></option>
                <option value="Hora 1">Hora 1</option>
                <option value="Hora 2">Hora 2</option>
                <option value="Hora 3">Hora 3</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <FloatingLabel label="Especialidad" className="mb-3">
            <Form.Select aria-label="Floating label select example" requied>
              <option></option>
              <option value="Especialidad 1">Especialidad 1</option>
              <option value="Especialidad 2">Especialidad 2</option>
              <option value="Especialidad  3">Especialidad 3</option>
            </Form.Select>
          </FloatingLabel>
        </Row>
        <Row>
          <FloatingLabel label="Médico" className="mb-3">
            <Form.Select aria-label="Floating label select example" required>
              <option></option>
              <option value="Médico 1">Médico 1</option>
              <option value="Médico 2">Médico 2</option>
              <option value="Médico 3">Médico 3</option>
            </Form.Select>
          </FloatingLabel>
        </Row>
        <div className = "text-center">
        <Button type="submit" variant="success">
          Enviar
        </Button>
        </div>
      </Form>
    </>
  );
};

export default AppointmentForm;
