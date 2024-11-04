import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../features/cart/cartSlice";
import QuntityButton from "../layout/QuntityButton";

const ProductListCom = ({ product }) => {
  const [showOffers, setShowOffers] = useState(false);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };

  const toggleOffers = (e) => {
    e.preventDefault();
    setShowOffers((prev) => !prev);
  };

  // const cart = useSelector((state) => state.cart);
  // console.log(cart);

  return (
    <div className="rounded-md shadow-md hover:shadow-lg h-70 flex flex-col">
      <div className="relative h-40 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-medium flex items-center">
            {product.name}
            {product.offer && (
              <a
                href="#"
                onClick={toggleOffers}
                className="text-blue-500 text-xxs hover:underline ml-2"
              >
                Offers
              </a>
            )}
          </h3>
          {showOffers && product.offer && (
            <p className="text-gray-600 text-xs mt-1">{product.offer}</p>
          )}
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-lg">₹{product.price}</span>
          {cartItem ? (
            <QuntityButton
              quantity={cartItem.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded"
              onClick={handleAddToCart}
            >
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListCom;
