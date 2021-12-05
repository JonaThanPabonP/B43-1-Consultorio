import React from 'react'
import UserLoginCard from '../components/UserLoginCard'

const UserLogin = () => {
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
        <h1 style={{ fontSize:"60px", fontFamily: "sans-serif" }}><strong>INGRESO DE USUARIO</strong></h1>
        <UserLoginCard/>
      </div>
    </>
  )
}

export default UserLogin
