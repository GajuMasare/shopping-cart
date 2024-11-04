import React from "react";
import { useSelector } from "react-redux";
import CartProductListCom from "../../components/CartSummary/CartProductListCom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.items);

  return (
    <section className="flex justify-center">
      <div className="mt-10 w-3/4 bg-white rounded-md drop-shadow-lg flex flex-col md:flex-row ">
        <div className="w-full md:w-8/12 p-5 rounded-t-md md:rounded-l-md px-10 ">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <p className="text-md text-gray-600">{cart.items.length} items</p>
          </div>
          <hr className="h-px my-5 bg-gray-600 border-1 " />
          {cart.items.map((product) => (
            <div key={product.id}>
              <CartProductListCom product={product} />
              <hr className="border-1 mb-3 bg-gray-400 " />
            </div>
          ))}
        </div>
        <div className="w-full md:w-5/12 p-2 bg-slate-600 md:rounded-r-md"></div>
      </div>
    </section>
  );
};

export default Cart;
