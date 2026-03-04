import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex-1">
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
        <p className="text-sm font-medium">${item.price} each</p>
      </div>
      <div className="text-right">
        <p className="font-bold">${item.price * item.quantity}</p>
        <button
          onClick={() => onRemove(item.id)}
          className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
