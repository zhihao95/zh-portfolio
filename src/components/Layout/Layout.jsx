import React from 'react'
import Topbar from '../Topbar/Topbar'
import BottomBar from '../BottomBar/BottomBar'
import LeftDrawer from '../LeftDrawer/LeftDrawer'
import { Outlet } from 'react-router-dom'
import drawerReducer from '../Reducer/reducers'
import { useReducer } from 'react'
import DrawerOpenContext  from "../Contexts/Contexts.jsx"

const Layout = () => {

  const [drawerOpen, dispatch] =useReducer(drawerReducer, false);

  const drawerOpenState = {
    drawerOpen,
    dispatch
  };

  return (
    <DrawerOpenContext.Provider value={drawerOpenState}>
        <Topbar/>
        <LeftDrawer />
        <Outlet />
        <BottomBar />
    </DrawerOpenContext.Provider>
  )
}

export default Layout