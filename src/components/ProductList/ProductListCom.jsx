import React from "react";

const ProductListCom = ({ product }) => {
  return (
    <div className="rounded-md overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative h-40 w-auto">
        <img className="w-full h-full object-cover" src={product.image} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium ">{product.name}</h3>
        <p className="text-gray-600 text-sm ">offer</p>
        <div className="flex items-center justify-between">
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
