import { ADD_TO_CART, CHANGE_CART, CLEAR_CART } from "./cartConstants";

const cartStorage = localStorage.getItem("cart");
const initialState = (cartStorage && JSON.parse(cartStorage)) || {
  items: [],
  totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalQuantity: +state.totalQuantity + 1,
      };
    case CHANGE_CART:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_CART:
      return {
        items: [],
        totalQuantity: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
