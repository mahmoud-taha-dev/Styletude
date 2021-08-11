import { ADD_PRODUCTS } from "./productsConstants";

export const addProducts = (items) => {
  return {
    type: ADD_PRODUCTS,
    payload: items,
  };
};
