import React from "react";
import UserAgenda from "../components/UserAgenda";
import { Navigate } from "react-router-dom";


const UserHome = () => {

  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }

  return (
    <>
      
      <UserAgenda/>
    </>
  );
};

export default UserHome;
