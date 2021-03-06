import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";
import PageContainer from "../../components/PageContainer/PageContainer";
import useCart from "../../utils/customHooks/useCart";
import calcGrandTotal from "../../utils/functions/calcGrandTotal";
import styles from "./Cart.module.scss";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const {
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    clearCartInStore,
  } = useCart();
  return (
    <div>
      <PageContainer title={`Cart (${cart.totalQuantity})`}>
        <h1 className={styles.cartTitle}>
          {!!cart.items.length
            ? `Shopping Cart (${cart.totalQuantity})`
            : "Empty Cart"}
        </h1>
        {!!cart.items.length && (
          <div className="text-center">
            <p className={styles.totalPrice}>{`Grand Total : ${calcGrandTotal(
              cart.items
            )} EGP`}</p>
            <button className={styles.clearBtn} onClick={clearCartInStore}>
              Clear Cart
            </button>
          </div>
        )}
        <div className={`${styles.cartGrid} mt-5`}>
          {!!cart.items.length &&
            cart.items.map((el) => (
              <CartCard
                functions={[increaseQuantity, decreaseQuantity, deleteProduct]}
                key={el.id}
                productItem={el}
              />
            ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default Cart;
