import React from "react";
import { Card } from "react-bootstrap";
import landingImage from '../assets/img/landing-image.jpg'

const LandingCard = () => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={landingImage} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default LandingCard;
