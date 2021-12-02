import React from "react";
import { Stack, Form, Col, Button } from "react-bootstrap";

import Appointment from "./Appointment";

const MedDailyAgenda = () => {
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
          <Col md={8}>
            <h1
              style={{
                marginLeft: "15px",
              }}
            >
              <strong>AGENDA CITAS</strong>
            </h1>
          </Col>
          <Col md={3}>
            <Form.Control type="date" />
          </Col>
          <Col md={1} style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <Button variant="light">
                <i class="bi bi-search"></i>
              </Button>
            </div>
          </Col>
        </div>
        <br />
        <Stack>
          <Appointment />
          <Appointment />
          <Appointment />
        </Stack>
      </div>
    </>
  );
};

export default MedDailyAgenda;
