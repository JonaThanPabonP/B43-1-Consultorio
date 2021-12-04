import React from "react";
import { Form, Button, FloatingLabel, Image } from "react-bootstrap";

import medLogo from "../assets/img/med.png";
import MedGoogleLoginButton from "./MedGoogleLoginButton";

const MedLoginCard = () => {
  return (
    <>
      <div
        style={{
          margin: "30px",
          padding: "20px",
          boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.3)",
          borderRadius: "25px",
        }}
      >
        <Form>
          <div className="text-center">
            <Image src={medLogo} width="90px" height="90px" roundedCircle />
          </div>
          <br />
          <FloatingLabel
            controlId="floatingInput"
            label="Correo electrónico"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Contraseña">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Button variant="success" type="submit">
              Entrar
            </Button>
            <Button size="sm" variant="link" type="submit">
              Registrarme
            </Button>
          </div>

          <p className="text-center">ó</p>

          <div>
            <MedGoogleLoginButton />
          </div>
        </Form>
      </div>
    </>
  );
};

export default MedLoginCard;
