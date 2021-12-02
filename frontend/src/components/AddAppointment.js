import React from "react";
import { Modal, Button } from "react-bootstrap";
import AppointmentForm from "./AppointmentForm";

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
            <strong>Nueva cita</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AppointmentForm/>
          <i>*Rellene todos los campos y de clic en enviar.</i>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="success" onClick={props.onHide}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const AddAppointment = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Agregar cita
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default AddAppointment;
