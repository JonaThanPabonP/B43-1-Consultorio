import React from "react";
import UserRegisterCard from "../components/UserRegisterCard";
import { Navigate } from "react-router-dom";

const UserRegister = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/user-register" />;
  } else if (user.flagNewUser == false) {
    return <Navigate to="/user-home" />;
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
          <strong>REGISTRO DE USUARIO</strong>
        </h1>
        <UserRegisterCard />
      </div>
    </>
  );
};

export default UserRegister;
