import React from 'react'
import MedLoginCard from '../components/MedLoginCard'

const MedLogin = () => {
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
        <h1 style={{ fontSize:"60px", fontFamily: "sans-serif" }}>INGRESO DE MÉDICOS</h1>
        <MedLoginCard/>
      </div>
    </>
  )
}

export default MedLogin
