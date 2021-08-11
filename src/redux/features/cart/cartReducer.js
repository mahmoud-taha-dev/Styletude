import { ADD_TO_CART, CHANGE_CART } from "./cartConstants";

const initialState = JSON.parse(
  localStorage.getItem("cart") || '{"items" : [], "totalQuantity" : 0}'
);

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
    default:
      return state;
  }
};

export default cartReducer;
