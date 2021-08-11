import { useHistory } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import styles from "./ProductCard.module.scss";
const ProductCard = ({ productItem }) => {
  const history = useHistory();
  return (
    <Card
      className={styles.productCard}
      onClick={() => {
        history.push(`/products/${productItem.id}`);
      }}
    >
      <CardImg
        top
        width="100%"
        src={productItem.imageURL}
        alt={productItem.image}
      />
      <CardBody>
        <CardTitle className={styles.productTitle} tag="h5">
          {productItem.name}
        </CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {productItem.brand}
        </CardSubtitle>
        <CardText>{`${productItem.price} EGP`}</CardText>
        <div className="d-flex justify-content-center">
          <AddToCartBtn productItem={productItem} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
