import React from "react";

const ProductListCom = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <img src={product.image} />
    </div>
  );
};

export default ProductListCom;
