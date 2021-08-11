import { ADD_TO_CART, CHANGE_CART, CLEAR_CART } from "./cartConstants";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const changeCart = (newCart) => {
  return {
    type: CHANGE_CART,
    payload: newCart,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
