import React from "react";
import { useLocalStorage } from "../../utils/customHooks/useLocalStorage";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.scss";
const Products = () => {
  const [products, setProducts] = useLocalStorage("products", []);
  return (
    <div className={styles.productsGrid}>
      {products.map((item) => (
        <ProductCard key={item.id} productItem={item} />
      ))}
    </div>
  );
};

export default Products;
