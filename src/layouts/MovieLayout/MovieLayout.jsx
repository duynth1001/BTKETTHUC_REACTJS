import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

const MovieLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MovieLayout
