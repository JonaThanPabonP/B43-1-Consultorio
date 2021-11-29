import React from "react";
import { Card } from "react-bootstrap";
import landingImage from "../assets/img/landing-image.jpg";


const LandingCard = () => {
  return (
    <>
      <Card className="text-center bg-dark text-white" style={{ width: '85%' }}>
        <Card.Img src={landingImage} />
        <Card.ImgOverlay>
            <Card.Title>CONSULTORIO</Card.Title>
        </Card.ImgOverlay>
          <Card.Text>
            "Consultorio" es un proyecto que nace a partir de la necesidad de
            tener una plataforma siempre disponible para los pacientes, quienes
            tendrán el derecho de agendar su cita médica sin salir de casa y lo
            mejor, sin filas largas y demoradas.
          </Card.Text>
          <Card.Text>
            De igual manera los médicos tienen acceso a sus agendas diarias a
            través de esta plataforma y poder así gestionar su día a día.
          </Card.Text>
      </Card>
    </>
  );
};

export default LandingCard;
