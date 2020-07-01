import { BUY_CAKE, ADD_CAKE } from "./cakeActions";

// DEFAULT STATE
const initialState = {
  numberOfCakes: 5,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 1,
      };
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
