import React from 'react';

const FoodCard = ({ item, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded mb-2" />
      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-xl">${item.price}</span>
        <button
          onClick={() => onAddToCart(item)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
