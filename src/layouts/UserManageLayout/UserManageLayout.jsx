import React from 'react'

import { Outlet } from 'react-router-dom'

const UserManageLayout = () => {
  return (
       <div style={{backgroundColor:'#F5ECEC'}}>
        <Outlet/>
      </div>
  )
}

export default UserManageLayout
