import React from 'react'
import NavBarBasic from '../components/NavbarBasic';
import {Image} from 'react-bootstrap';

const Landing = () => {
  return (
    <>
      <NavBarBasic/>
      <Image src={"../assets/img/logo-blanco.svg"} fluid />
    </>
  )
}

export default Landing
