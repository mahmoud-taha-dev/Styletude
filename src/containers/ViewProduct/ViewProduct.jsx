import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCartBtn from "../../components/AddToCartBtn/AddToCartBtn";
import PageContainer from "../../components/PageContainer/PageContainer";
import { useLocalStorage } from "../../utils/customHooks/useLocalStorage";

const ViewProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useLocalStorage("products", []);
  const [productItem, setproductItem] = useState(null);
  useEffect(() => {
    const product = products.find((el) => el.id === id);
    setproductItem(product);
  }, [products, id]);
  return (
    <div>
      <PageContainer title={productItem?.name || "View Product"}>
        {productItem && (
          <div className="row">
            <div className="col-md-5">
              <div>
                <img
                  className="w-100"
                  src={productItem.imageURL}
                  alt={productItem.image}
                />
              </div>
            </div>
            <div className="col-md-7 mt-3">
              <h1 className="h3">{productItem.name}</h1>
              <p>{productItem.brand}</p>
              <p>{productItem.category}</p>
              <p>{productItem.description}</p>
              <AddToCartBtn productItem={productItem} />
            </div>
          </div>
        )}
      </PageContainer>
    </div>
  );
};

export default ViewProduct;
