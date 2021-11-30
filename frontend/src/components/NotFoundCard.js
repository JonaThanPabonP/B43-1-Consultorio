import React from "react";
import { Image } from "react-bootstrap";
import imagen from "../assets/img/not-found.jpg";

const NotFoundCard = () => {
  return (
    <>
      <div
        style={{
          margin: "50px 0 20px 0",
          padding: "20px",
          display: "flex",
          maxWidth: "700px",
          justifyContent: "center",
          boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.3)",
          borderRadius: "25px"
        }}
      >
        <Image src={imagen} fluid style={{
          borderRadius: "15px"
        }}/>
      </div>
    </>
  );
};

export default NotFoundCard;
