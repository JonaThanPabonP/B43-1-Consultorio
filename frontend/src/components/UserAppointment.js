import React from "react";
import { Tooltip, OverlayTrigger, Button, Image, Stack } from "react-bootstrap";
import { FaRegClock, FaRegCalendarAlt, FaStethoscope } from "react-icons/fa";

import btndel from "../assets/img/cancelar.png";

import { deleteAppointment } from "../apis/crudAppos";
import EditAppointment from "./EditAppointment";

const UserAppointment = (props) => {

  function del(appo) {
    deleteAppointment(appo, (res) => {
      console.log(res);
      if (res == "Success") {
        alert("La cita se eliminó exitosamente.");
        window.location.href = "/user-home";
      } else {
        alert("Algo salió mal, vuelve a intentarlo");
      }
    });
  }


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
        <h4>
          <strong>{props.data.spec}</strong>
        </h4>
        <Stack gap={3} direction="horizontal">
          <FaRegCalendarAlt />
          <div>{props.data.date}</div>
        </Stack>
        <Stack gap={3} direction="horizontal">
          <FaRegClock />
          <div>{props.data.hour}</div>
        </Stack>

        <Stack gap={3} direction="horizontal">
          <FaStethoscope />
          <div>{props.data.med}</div>
        </Stack>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <OverlayTrigger overlay={<Tooltip>Borrar</Tooltip>}>
          <Button variant="link" onClick={() => del(props.data.aid)}>
            <Image src={btndel} width="35px" />
          </Button>
        </OverlayTrigger>
        
          <EditAppointment data={props.data}/>
      </div>
    </div>
  );
};

export default UserAppointment;
