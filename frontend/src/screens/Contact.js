import React from "react";
import ContactCard from "../components/ContactCard";

const Contact = () => {

  
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "80px",
        }}
      >
        <h1 style={{ fontSize:"60px", fontFamily: "sans-serif" }}>CONTACTO</h1>
        <ContactCard />
      </div>
    </>
  );
};

export default Contact;
