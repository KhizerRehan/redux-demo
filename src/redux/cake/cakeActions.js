// TYPES OF CAKE ACTIONS:

export const BUY_CAKE = "buy_cake";
export const ADD_CAKE = "add_cake";

// ACTION CREATORS

export const BuyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const AddCake = () => {
  return {
    type: ADD_CAKE,
    payload: 1,
  };
};
