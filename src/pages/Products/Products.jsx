import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllProducts } from "../../features/products/productsSelector";

const Products = () => {
  const products = useSelector(selectAllProducts);
  console.log(products);
  return <div>Products</div>;
};

export default Products;
