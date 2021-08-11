import useCart from "../../utils/customHooks/useCart";
import MainBtn from "../MainBtn/MainBtn";
import styles from "./AddToCartBtn.module.scss";

const AddToCartBtn = ({ productItem }) => {
  const { addProductToCart } = useCart();

  return (
    <>
      {productItem?.countInStock ? (
        <MainBtn
          text="Add To Cart"
          action={(e) => {
            addProductToCart(productItem);
            e.stopPropagation();
          }}
        />
      ) : (
        <button disabled className={styles.notAvailabble}>
          Not Available
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
