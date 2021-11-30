import React from "react";
import LandingCard from "../components/LandingCard";
import MedButton from "../components/MedButton";
import UserButton from "../components/UserButton";

const Landing = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.3)",
        }}
      >
        <LandingCard />
        <div 
          style={{ 
            justifyContent: "space-between" 
          }}
        >
          <UserButton />
          <MedButton />
        </div>
      </div>
    </>
  );
};

export default Landing;
