export const BUY_ICECREAM = "buy_icecream";
export const ADD_ICECREAM = "add_icecream";

// ACTION CREATORS
export const BuyIcecream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

export const AddIcecream = () => {
  return {
    type: ADD_ICECREAM,
    payload: 1,
  };
};
