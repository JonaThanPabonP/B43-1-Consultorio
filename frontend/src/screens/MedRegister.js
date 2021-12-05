import React from "react";
import MedRegisterCard from "../components/MedRegisterCard";
import { Navigate } from "react-router-dom";

const MedRegister = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/med-register" />;
  } else if (user.flagNewUser == false) {
    return <Navigate to="/med-home" />;
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
          <strong>REGISTRO DE MÉDICO</strong>
        </h1>
        <MedRegisterCard />
      </div>
    </>
  );
};

export default MedRegister;
