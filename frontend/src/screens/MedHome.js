import React from "react";
import MedDailyAgenda from "../components/MedDailyAgenda";
import { Navigate } from "react-router-dom";

const MedHome = () => {
  var user = JSON.parse(localStorage.getItem("user"));

  if (user == undefined) {
    return <Navigate to="/" />;
  } 

  return (
    <>
      <MedDailyAgenda />
    </>
  );
};

export default MedHome;
