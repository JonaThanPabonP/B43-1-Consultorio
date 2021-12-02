import React from "react";
import { Form, Row, Col, Image } from "react-bootstrap";

const AppointmentInfo = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Form>
        <Row>
          <Col sm={3}>
            <Image
              src={user.photoUrl}
              width="100px"
              height="100px"
              roundedCircle
            />
          </Col>
          <Col>
            <h3>Paciente</h3>
            <div>
              <p>{user.name}</p>
              <p>Edad</p>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AppointmentInfo;
