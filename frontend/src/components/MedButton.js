import { Image } from "react-bootstrap";
import React from "react";

import imagen from "../assets/img/med.png";

const MedButton = () => {
  return (
    <>
      <a href="../screens/UserLogin.js">
        <Image src={imagen} style={{ width: "100px", margin: "20px 60px" }}/>
      </a>
    </>
  );
};

export default MedButton;
