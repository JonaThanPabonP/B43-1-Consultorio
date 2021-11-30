import React from "react";
import { Card } from "react-bootstrap";
import landingImage from "../assets/img/landing-image.jpg";

const LandingCard = () => {
  return (
    <>
      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          className="text-center bg-dark text-white"
          style={{
            width: "85%",
            maxWidth: "60%",
            boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.3)",
          }}
        >
          <Card.Img src={landingImage} />
          <Card.ImgOverlay>
            <Card.Title style={{ fontSize: "80px", fontFamily:"fantasy" }}>CONSULTORIO</Card.Title>
          </Card.ImgOverlay>
          <Card.Body style={{ fontSize: "20px"}}>
            <Card.Text>
              "Consultorio" es un proyecto que nace a partir de la necesidad de
              tener una plataforma siempre disponible (24/7) para los pacientes,
              quienes tendrán el derecho de agendar su cita médica sin salir de
              casa y lo mejor, sin tener que hacer interminables filas.
            </Card.Text>
            <Card.Text>
              De igual manera los médicos tienen acceso a sus agendas diarias a
              través de esta plataforma y poder así gestionar su día a día.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default LandingCard;
