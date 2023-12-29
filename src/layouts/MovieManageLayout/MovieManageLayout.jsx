import React from 'react'
import { Outlet } from 'react-router-dom'

const MovieManageLayout = () => {
  return (
       <div style={{backgroundColor:'#F5ECEC'}}>
        <Outlet/>
      </div>
  )
}

export default MovieManageLayout
