import React from "react";
import { Tooltip, OverlayTrigger, Button, Image } from "react-bootstrap";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";

import btndel from "../assets/img/cancelar.png";
import btnedit from "../assets/img/editar.png";

const UserAppointment = () => {
  return (
    <div
      className="bg-light border rounded"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems:"center",
          }}
        >
          <FaRegCalendarAlt/><p>Fecha</p>
          <FaRegClock /><p>Hora</p>
        </div>
        <div>
          <h5>Especialidad</h5>
          <h5>Médico</h5>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <OverlayTrigger overlay={<Tooltip>Borrar</Tooltip>}>
          <Button variant="link">
            <Image src={btndel} width="35px" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip>Editar</Tooltip>}>
          <Button variant="link">
            <Image src={btnedit} width="35px" />
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default UserAppointment;
