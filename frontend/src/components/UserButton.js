import { Image } from "react-bootstrap";
import React from "react";

import imagen from "../assets/img/usuario.png";

const UserButton = () => {
  return (
    <>
      <a href="/user-login">
        <Image src={imagen} style={{ width: "100px", margin: "20px 60px" }}/>
      </a>
    </>
  );
};

export default UserButton;
