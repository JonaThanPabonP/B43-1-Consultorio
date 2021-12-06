import React from "react";
import { Tooltip, OverlayTrigger, Button, Image, Stack } from "react-bootstrap";
import { FaRegClock, FaRegCalendarAlt, FaStethoscope } from "react-icons/fa";

import btndel from "../assets/img/cancelar.png";

import { deleteAppointment } from "../apis/crudAppos";
import EditAppointment from "./EditAppointment";

const UserAppointment = (props) => {
  localStorage.setItem("appo", JSON.stringify(props));
  var appo = JSON.parse(localStorage.getItem("appo"));

  function del(appo) {
    deleteAppointment(appo.aid, (res) => {
      console.log(res);
      if (res == "Success") {
        localStorage.deleteItem("appo");
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
          <Button variant="link" onClick={() => del(appo)}>
            <Image src={btndel} width="35px" />
          </Button>
        </OverlayTrigger>
        
          <EditAppointment/>
      </div>
    </div>
  );
};

export default UserAppointment;
