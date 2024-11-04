import React, { useState } from "react";

const ProductListCom = ({ product }) => {
  const [showOffers, setShowOffers] = useState(false);

  const toggleOffers = (e) => {
    e.preventDefault();
    setShowOffers((prev) => !prev);
  };

  return (
    <div className="rounded-md  shadow-md hover:shadow-lg h-70 flex flex-col">
      <div className="relative h-40 w-auto">
        <img className="w-full h-full object-cover" src={product.image} />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div className="flex-grow">
          <h3 className="text-lg font-medium">
            {product.name}
            {/* Anchor tag to toggle offers */}
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
          {/* Show offers if toggle is active */}
          {showOffers && (
            <div className="text-gray-600 text-xs mb-2 mt-1">
              {product.offer}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-lg">₹{product.price}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListCom;
