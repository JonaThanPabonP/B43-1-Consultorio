import React, { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import AddAppointment from "./AddAppointment";
import UserAppointment from "./UserAppointment";

import { searchAppoByUser } from "../apis/crudAppos";

const UserAgenda = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchAppoByUser(user.uid, setResults);
  }, []);

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              marginLeft: "15px",
            }}
          >
            <strong>AGENDA CITAS</strong>
          </h1>
          <div>
            <AddAppointment />
          </div>
        </div>
        <br />
        <Stack gap={3}>
          {results.map((result) => (
            <UserAppointment data={result} />
          ))}
        </Stack>
      </div>
    </>
  );
};

export default UserAgenda;
