import React from "react";
import QuntityButton from "../layout/QuntityButton";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import RemoveSvg from "../layout/RemoveSvg";

const CartProductListCom = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };

  const handleRemove = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <div className="flex items-center mb-4 justify-between">
      <div className="h-20 w-16 md:h-20 md:w-20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div>
        <div className="w-12 text-center">{product.name}</div>
      </div>
      <div className="flex justify-center items-center">
        <QuntityButton
          quantity={cartItem.quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </div>
      <div className="flex items-center">
        <div className="text-center">
          <span>₹{product.price}</span>
        </div>
      </div>
      <div>
        <RemoveSvg remove={handleRemove} />
      </div>
    </div>
  );
};

export default CartProductListCom;
