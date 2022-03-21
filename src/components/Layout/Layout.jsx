import React, { useReducer, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import BottomBar from '../BottomBar/BottomBar';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import drawerReducer from '../Reducer/reducers';
import DrawerOpenContext from '../Contexts/Contexts';

function Layout() {
  const [drawerOpen, dispatch] = useReducer(drawerReducer, false);

  const drawerOpenState = useMemo(() => ({
    drawerOpen,
    dispatch,
  }), []);

  return (
    <DrawerOpenContext.Provider value={drawerOpenState}>
      <Topbar />
      <LeftDrawer />
      <Outlet />
      <BottomBar />
    </DrawerOpenContext.Provider>
  );
}

export default Layout;
