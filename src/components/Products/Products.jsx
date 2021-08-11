import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.scss";
const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className={styles.productsGrid}>
      {products.map((item) => (
        <ProductCard key={item.id} productItem={item} />
      ))}
    </div>
  );
};

export default Products;
