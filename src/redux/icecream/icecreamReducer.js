import { BUY_ICECREAM, ADD_ICECREAM } from "./icecreamActions";

// DEFAULT STATE
const initialState = {
  numberOfIcecreams: 15,
};

const icecreamReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };

    case ADD_ICECREAM:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams + action.payload,
      };

    default:
      return state;
  }
};

export default icecreamReducer;
