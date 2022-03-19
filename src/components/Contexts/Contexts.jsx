import { createContext, useContext } from 'react';

const DrawerOpenContext = createContext(false);

export const useDrawerOpenContext = () => {
  return useContext(DrawerOpenContext);
}

export default DrawerOpenContext;