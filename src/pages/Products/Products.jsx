import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllProducts } from "../../features/products/productsSelector";
import ProductListCom from "../../components/ProductList/ProductListCom";

const Products = () => {
  const products = useSelector(selectAllProducts);
  // console.log(products);
  return (
    <section>
      <header>Products page</header>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            {" "}
            <ProductListCom product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
