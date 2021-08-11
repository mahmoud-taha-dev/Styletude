import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "./useLocalStorage";
import { addToCart, changeCart } from "../../redux/features/cart/cartActions";
import { useEffect } from "react";
import { toast } from "react-toastify";

const useCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartStorage, setCartStorage] = useLocalStorage("cart", {
    items: [],
    totalQuantity: 0,
  });

  useEffect(() => {
    setCartStorage(cart);
  }, [cart]);

  const addProductToCart = (productItem) => {
    const item = cart.items.find((el) => el.id === productItem.id);
    if (!item) {
      dispatch(addToCart({ ...productItem, quantity: 1 }));
      toast.dark(`Successfully ${productItem.name} added to cart`);
    } else {
      toast.warn(`${productItem.name} was already in cart`);
    }
  };

  const increaseQuantity = (id) => {
    let isChanged = false;
    const newCart = cart.items.map((el) => {
      if (el.id === id) {
        isChanged = true;
        return { ...el, quantity: +el.quantity + 1 };
      } else {
        return el;
      }
    });
    isChanged &&
      dispatch(
        changeCart({
          items: newCart,
          totalQuantity: +cart.totalQuantity + 1,
        })
      );
  };

  const decreaseQuantity = (id) => {
    let isChanged = false;
    const newCart = cart.items.map((el) => {
      if (el.id === id) {
        isChanged = true;
        return { ...el, quantity: +el.quantity - 1 };
      } else {
        return el;
      }
    });
    isChanged &&
      dispatch(
        changeCart({
          items: newCart,
          totalQuantity: +cart.totalQuantity - 1,
        })
      );
  };

  const deleteProduct = (id, quantity) => {
    const newCart = cart.items.filter((el) => el.id !== id);
    newCart.length < cart.items.length &&
      dispatch(
        changeCart({
          items: newCart,
          totalQuantity: +cart.totalQuantity - quantity,
        })
      );
  };

  return {
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
  };
};

export default useCart;
