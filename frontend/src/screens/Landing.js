import React from "react";
import LandingCard from "../components/LandingCard";
import MedButton from "../components/MedButton";
import NavBarBasic from "../components/NavbarBasic";
import UserButton from "../components/UserButton";

const Landing = () => {
  return (
    <>
      <NavBarBasic />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <LandingCard />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <UserButton />
          <MedButton />
        </div>
      </div>
    </>
  );
};

export default Landing;
