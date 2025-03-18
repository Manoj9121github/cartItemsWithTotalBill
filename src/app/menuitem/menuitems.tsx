import React from "react";

const Menuitems = ({ item, onAddToCart }) => {
  return (
    <div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <div className="p-4">
        <h3 className="font-bold text-xl">{item.name}</h3>
        <p className="text-gray-700">{item.description}</p>
        <p className="font-semibold text-lg">${item.price}</p>
        <button
          onClick={() => onAddToCart(item)}
          className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default Menuitems;
