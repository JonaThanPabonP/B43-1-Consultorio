import React from "react";
import MedDailyAgenda from "../components/MedDailyAgenda";
import { Navigate } from "react-router-dom";

const MedHome = () => {
  var user = JSON.parse(localStorage.getItem("user"));

  if (user == undefined) {
    return <Navigate to="/" />;
  } else if (user.type != "médico") {
    return <Navigate to="/user-home" />;
  }

  return (
    <>
      <MedDailyAgenda />
    </>
  );
};

export default MedHome;
