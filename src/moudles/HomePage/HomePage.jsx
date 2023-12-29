import React from 'react'
import Banner from "./Banner";
import NavBar from './NavBar';
import Showing from './Showing';
import HexaEvtDiscount from './HexaEvtDiscount';
const HomePage = () => {
  return (
    <div style={{backgroundColor:'#F5ECEC'}}>
      <NavBar/>
      <Banner/>
      <Showing/>
     <HexaEvtDiscount/>
    </div>
  )
}

export default HomePage
