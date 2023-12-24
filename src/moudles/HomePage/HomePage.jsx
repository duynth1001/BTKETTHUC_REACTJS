import React from 'react'
import Banner from "../Banner";
import NavBar from '../NavBar';
import Showing from '../Showing';
import Header from '../../components/Header/Header';
const HomePage = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
       <Banner/>
      <Showing/>
    </div>
  )
}

export default HomePage
