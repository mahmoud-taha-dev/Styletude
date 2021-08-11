import { combineReducers, createStore } from "redux";
import cartReducer from "./features/cart/cartReducer";
import productsReducer from "./features/products/productsReducer";

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});
const store = createStore(reducers);

export default store;
