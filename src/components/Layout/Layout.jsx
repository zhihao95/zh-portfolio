import React from 'react'
import Topbar from '../Topbar/Topbar'
import BottomBar from '../BottomBar/BottomBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Topbar />
        <Outlet />
        <BottomBar /> 
    </div>
  )
}

export default Layout