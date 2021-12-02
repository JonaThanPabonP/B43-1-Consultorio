import React from "react";
import { Button, Form, FloatingLabel, Card } from "react-bootstrap";

const ContactCard = () => {
  var name = "";
  var email = "";
  var user = JSON.parse(localStorage.getItem("user"));

  if (user != undefined) {
    name = (
      <Form.Control
        type="text"
        placeholder="name@example.com"
        value={user.name}
      />
    );
    email = (
      <Form.Control type="email" placeholder="name@example.com" value={user.email} />
    );
  } else {
    name = <Form.Control type="text" placeholder="name@example.com" />;
    email = <Form.Control type="email" placeholder="name@example.com" />;
  }

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
        <Card
          style={{ border: "none", width: "700px" }}
          className="text-center"
        >
          <Card.Body>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Nombre completo"
            >
              {name}
            </FloatingLabel>
            <br />
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Correo electrónico"
            >
              {email}
            </FloatingLabel>
            <br />
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Escribe tu mensaje aquí"
            >
              <Form.Control
                as="textarea"
                placeholder="Escribe tu mensaje aquí"
                style={{ height: "200px" }}
              />
            </FloatingLabel>
            <br />
            <Button variant="primary">Enviar</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ContactCard;
