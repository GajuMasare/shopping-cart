import React from "react";
import { useSelector } from "react-redux";
import CartProductListCom from "../../components/CartSummary/CartProductListCom";
import BackArrow from "../../components/layout/BackArrow";
import { Link } from "react-router-dom";
import { calculateTotals } from "../../utils/calculateTotals";
import { getFreeItemMessages } from "../../utils/freeItemMessages";
import saveToFirestore from "../../utils/saveToFirestore";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { subtotal, total, savings } = calculateTotals(cart.items);
  const freeItemMessages = getFreeItemMessages(cart.items);
  const handleSave = () => {
    saveToFirestore(cart.items);
  };
  return (
    <section className="flex justify-center">
      <div className="mt-10 w-3/4 bg-white rounded-md drop-shadow-lg flex flex-col md:flex-row md:h-[600px] ">
        <div className="w-full md:w-8/12 p-5 rounded-t-md md:rounded-l-md md:px-10 overflow-auto">
          <div className="flex justify-between">
            <h1 className="text-sm md:text-2xl font-bold">Shopping Cart</h1>
            <p className="text-xs md:text-md text-gray-600">
              {cart.items.length} items
            </p>
          </div>
          <hr className="h-px my-5 bg-gray-600 border-1 " />
          {cart.items.map((product) => (
            <div key={product.id}>
              <CartProductListCom product={product} />
              <hr className="border-1 mb-3 bg-gray-400 " />
            </div>
          ))}
          <Link to="/">
            <div className="flex items-center text-xs pt-3 font-semibold hover:text-blue-600">
              <BackArrow />
              <p>Back to Products </p>
            </div>
          </Link>
        </div>
        <div className="w-full md:w-5/12 bg-gray-200 md:rounded-r-md px-5">
          <div className="py-5">
            <h1 className="text-2xl font-bold text-gray-600">Summary</h1>
            <hr className="my-5 border border-gray-600" />
          </div>
          <div className="font-semibold text-gray-800">
            <div className="flex">ITEMS {cart.items.length}</div>
            <div>
              {freeItemMessages.length > 0 && (
                <div className=" text-sm text-green-600 mt-3">
                  {freeItemMessages.map((message, index) => (
                    <div key={index}>{message}</div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex justify-between mt-10">
              Subtotal:<span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-red-500 mt-1 ">
              Saving:<span>₹{savings}</span>
            </div>
            <hr className="my-5 border border-gray-600" />
            <div className="flex font-bold justify-between mt-2">
              Total:<span>₹{total}</span>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
          >
            save to firebase
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
