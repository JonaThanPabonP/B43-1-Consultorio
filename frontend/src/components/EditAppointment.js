import React from "react";
import { Modal, Image, Button } from "react-bootstrap";
import EditAppointmentForm from "./EditAppointmentForm";

import btnedit from "../assets/img/editar.png";

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
          <Modal.Title as="h1" id="contained-modal-title-vcenter">
            <strong>Actualizar cita</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditAppointmentForm />
        </Modal.Body>
        <Modal.Footer>
          <p style={{ color: "red", fontSize: "10px" }}>
            <i>* Rellene todos los campos.</i>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const EditAppointment = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="link" onClick={() => setModalShow(true)}>
        <Image src={btnedit} width="35px" />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default EditAppointment;
