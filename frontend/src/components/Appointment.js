import React from "react";
import { Stack } from "react-bootstrap";
import ViewAppointment from "./ViewAppointment";

const Appointment = (props) => {
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
          <div>props.data.hour</div>
          <div>props.data.userName</div>
        </Stack>
      </div>
      <div>
        <ViewAppointment />
      </div>
    </div>
  );
};

export default Appointment;
