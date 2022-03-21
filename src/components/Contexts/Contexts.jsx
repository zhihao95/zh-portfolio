import { createContext, useContext } from 'react';

const DrawerOpenContext = createContext(false);

export const useDrawerOpenContext = () => useContext(DrawerOpenContext);

export default DrawerOpenContext;
