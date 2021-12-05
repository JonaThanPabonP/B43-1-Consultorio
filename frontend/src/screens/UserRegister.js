import React from 'react'
import UserRegisterCard from '../components/UserRegisterCard'

const UserRegister = () => {
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
        <h1 style={{ fontSize:"60px", fontFamily: "sans-serif" }}><strong>REGISTRO DE USUARIO</strong></h1>
        <UserRegisterCard/>
      </div>
    </>
  )
}

export default UserRegister
