import React from "react";
import { Form, Row, FloatingLabel, Col } from "react-bootstrap";

const AppointmentForm = () => {
  return (
    <>
      <Form>
        <Row>
          <Col>
            <FloatingLabel label="Fecha" className="mb-3">
              <Form.Control type="date" required/>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Hora" className="mb-3">
              <Form.Select aria-label="Floating label select example" required>
                <option></option>
                <option value="1">Hora 1</option>
                <option value="2">Hora 2</option>
                <option value="3">Hora 3</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
        <FloatingLabel label="Especialidad" className="mb-3">
          <Form.Select aria-label="Floating label select example">
            <option></option>
            <option value="1">Especialidad 1</option>
            <option value="2">Especialidad 2</option>
            <option value="3">Especialidad 3</option>
          </Form.Select>
        </FloatingLabel>
        </Row>
        <Row>
        <FloatingLabel label="Médico" className="mb-3">
          <Form.Select aria-label="Floating label select example">
            <option></option>
            <option value="1">Médico 1</option>
            <option value="2">Médico 2</option>
            <option value="3">Médico 3</option>
          </Form.Select>
        </FloatingLabel>
        </Row>
        
      </Form>
    </>
  );
};

export default AppointmentForm;
