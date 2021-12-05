import React from 'react'
import MedRegisterCard from '../components/MedRegisterCard'

const MedRegister = () => {
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
        <h1 style={{ fontSize:"60px", fontFamily: "sans-serif" }}><strong>REGISTRO DE MÉDICO</strong></h1>
        <MedRegisterCard/>
      </div>
    </>
  )
}

export default MedRegister
