import React from "react";
import MedLoginCard from "../components/MedLoginCard";
import {Navigate} from 'react-router-dom';

const MedLogin = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user != undefined) {
    if (user.flagNewUser == false) {
      return <Navigate to="/med-home" />;
    } else {
      return <Navigate to="/med-register" />;
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "80px",
        }}
      >
        <h1 style={{ fontSize: "60px", fontFamily: "sans-serif" }}>
          <strong>INGRESO DE MÉDICOS</strong>
        </h1>
        <MedLoginCard />
      </div>
    </>
  );
};

export default MedLogin;
