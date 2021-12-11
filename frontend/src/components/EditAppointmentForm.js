import React from "react";
import { Form, Row, FloatingLabel, Col, Button } from "react-bootstrap";

import { replaceAppointment } from "../apis/crudAppos";

const EditAppointmentForm = (props) => {
  var user = JSON.parse(localStorage.getItem("user"));
  var id = props.aid;

  function update(even) {
    even.preventDefault();
    const obj = {
      date: even.target[0].value,
      hour: even.target[1].value,
      spec: even.target[2].value,
      med: even.target[3].value,
      userID: user.uid,
      userName: user.name,
    };

    replaceAppointment(id, obj, (res) => {
      console.log(res);
      if (res == "Success") {
        alert("Cita actualizada correctamente.");
        window.location.href = "/user-home";
      } else {
        alert("Algo salió mal, vuelve a intentarlo");
      }
    });
  }

  return (
    <>
      <Form onSubmit={update}>
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
                <option value="8:00">8:00</option>
                <option value="9:00">9:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <FloatingLabel label="Especialidad" className="mb-3">
            <Form.Select aria-label="Floating label select example" required>
              <option></option>
              <option value="Medicina General">Medicina General</option>
              <option value="Cardiología">Cardiología</option>
              <option value="Rayos X">Rayos X</option>
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
        <div className="text-center">
          <Button type="submit" variant="success">
            Guardar
          </Button>
        </div>
      </Form>
    </>
  );
};

export default EditAppointmentForm;
