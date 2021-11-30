import { Button } from "react-bootstrap";
import React from "react";
import NotFoundCard from "../components/NotFoundCard";

const NotFound = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <NotFoundCard />
        <Button
          variant="success"
          style={{
            fontSize: "20px"
          }}
        >
          Inicio
        </Button>
      </div>
    </>
  );
};

export default NotFound;
