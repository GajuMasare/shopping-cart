import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllProducts } from "../../features/products/productsSelector";
import ProductListCom from "../../components/ProductList/ProductListCom";

const Products = () => {
  const products = useSelector(selectAllProducts);
  // console.log(products);
  return (
    <section className="lg:mt-20 p-3 mx-auto">
      <div className="w-60%">
        <h1 className="flex justify-center text-xl font-semibold">
          Our Products
        </h1>
        <div className="grid grid-cols-1 px-10 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-5">
          {products.map((product) => (
            <div key={product.id}>
              {" "}
              <ProductListCom product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
