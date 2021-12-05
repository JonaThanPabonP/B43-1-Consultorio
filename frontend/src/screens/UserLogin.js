import React from 'react'
import UserLoginCard from '../components/UserLoginCard'
import { Navigate } from "react-router-dom";

const UserLogin = () => {

  var user = JSON.parse(localStorage.getItem("user"));
  if (user != undefined) {
    if (user.flagNewUser == false) {
      return <Navigate to="/user-home" />;
    } else {
      return <Navigate to="/user-register" />;
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
        <h1 style={{ fontSize:"60px", fontFamily: "sans-serif" }}><strong>INGRESO DE USUARIO</strong></h1>
        <UserLoginCard/>
      </div>
    </>
  )
}

export default UserLogin
