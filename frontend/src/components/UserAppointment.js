import React from "react";
import { Tooltip, OverlayTrigger, Button, Image, Stack } from "react-bootstrap";
import { FaRegClock, FaRegCalendarAlt, FaStethoscope } from "react-icons/fa";

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
        <h4><strong>Especialidad</strong></h4>
        <Stack gap={3} direction="horizontal">
          <FaRegCalendarAlt />
          <div>Fecha:</div>
        </Stack>
        <Stack gap={3} direction="horizontal">
          <FaRegClock />
          <div>Hora:</div>
        </Stack>

        <Stack gap={3} direction="horizontal">
          <FaStethoscope />
          <div>Médico:</div>
        </Stack>
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
