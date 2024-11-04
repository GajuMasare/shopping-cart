import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return <div>Cart</div>;
};

export default Cart;
