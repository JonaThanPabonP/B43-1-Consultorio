import React from "react";
import { Stack } from "react-bootstrap";
import UserAppointment from "./UserAppointment";

const UserAgenda = () => {
  return (
    <>
      <div
        style={{
          margin: "30px 200px",
          padding: "20px",
          boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.3)",
          borderRadius: "25px",
        }}
      >
        <h1 style={{
          marginLeft: "15px"}}><strong>AGENDA CITAS</strong></h1>
        <br />
        <Stack gap={3}>
          <UserAppointment />
          <UserAppointment />
          <UserAppointment />
          <UserAppointment />
          <UserAppointment />
          <UserAppointment />
          <UserAppointment />
          <UserAppointment />
          <UserAppointment />
          <UserAppointment />
          <UserAppointment />
        </Stack>
      </div>
    </>
  );
};

export default UserAgenda;
