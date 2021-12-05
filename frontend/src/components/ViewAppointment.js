import React from "react";
import { Modal, Button, Col, Row } from "react-bootstrap";
import AppointmentInfo from "./AppointmentInfo";

import { getAppointment } from "../apis/crudAppos";

function MyVerticallyCenteredModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Row>
              <Col>
                <div>dd/mm/aaaa</div>
              </Col>
              <Col>
                <div>HH:mm</div>
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AppointmentInfo />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={props.onHide}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const ViewAppointment = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const aid = "r8F5OfuVwtfQnAV688Mu";
  getAppointment(aid, (res) => {
    var appointment = localStorage.setItem("app1", JSON.stringify(res.data));
    console.log(appointment);
  });

  return (
    <>
      <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
        <i class="bi bi-eye-fill"></i>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ViewAppointment;
