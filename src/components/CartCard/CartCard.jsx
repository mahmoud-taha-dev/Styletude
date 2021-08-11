import React from "react";
import useCart from "../../utils/customHooks/useCart";
import styles from "./CartCard.module.scss";
import MainBtn from "../MainBtn/MainBtn";
import { useHistory } from "react-router-dom";

const CartCard = ({ productItem }) => {
  const { increaseQuantity, decreaseQuantity, deleteProduct } = useCart();
  const history = useHistory();
  return (
    <div className={`row m-0 p-0 ${styles.cartCard}`}>
      <div className={`col-12 p-0 col-sm-6 ${styles.productImgCont}`}>
        <img
          src={productItem.imageURL}
          className={`w-100 h-100 ${styles.productImgCont}`}
          alt={productItem.image}
        />
      </div>
      <div className="col-12 d-flex flex-column justify-content-batween col-sm-6 mt-2">
        <div>
          <h5 className={styles.productTitle}>{productItem.name}</h5>
          <h6 className="text-muted">{productItem.brand}</h6>
          <p>{`${productItem.price} EGP`}</p>
          <div className="row align-items-center mb-3">
            <p
              className={`col-7  mb-0 ${styles.quantity}`}
            >{`Quantity : ${productItem.quantity}`}</p>
            <div className="col-5 px-0">
              <button
                className={styles.quantityBtn}
                onClick={() => {
                  decreaseQuantity(productItem.id);
                }}
                disabled={+productItem.quantity === 1}
              >
                -
              </button>
              <button
                className={styles.quantityBtn}
                onClick={() => {
                  increaseQuantity(productItem.id);
                }}
                disabled={productItem.quantity === productItem.countInStock}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-auto mb-3">
          <button
            className={styles.delBtn}
            onClick={() => {
              deleteProduct(productItem.id, productItem.quantity);
            }}
          >
            Remove
          </button>
          <MainBtn
            text="View"
            style={`mx-2`}
            action={() => {
              history.push(`/products/${productItem.id}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
