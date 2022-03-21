import { DRAWER_OPEN } from '../Actions/actions';

const drawerReducer = (state, action) => {
  switch (action.type) {
    case DRAWER_OPEN:
      return action.payload;
    default:
      return state;
  }
};

export default drawerReducer;
