import { ADD_PRODUCTS } from "./productsConstants";

const initialState = [];
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
