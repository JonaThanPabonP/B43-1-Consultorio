import React from "react";
import { Stack } from "react-bootstrap";
import ViewAppointment from "./ViewAppointment";

const Appointment = () => {
  return (
    <div
      className="bg-light border rounded"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
      }}
    >
      <div style={{display: "flex", alignItems: "center"}}>
        <Stack gap={5} direction="horizontal">
          <div>Hora</div>
          <div>Paciente</div>
        </Stack>
      </div>
      <div>
        <ViewAppointment />
      </div>
    </div>
  );
};

export default Appointment;
