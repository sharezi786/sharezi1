import React from 'react';

const OrderCard = ({ order }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Order #{order.id}</h3>
        <span className={`px-2 py-1 rounded text-sm font-medium ${
          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
          order.status === 'in transit' ? 'bg-blue-100 text-blue-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {order.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-2">Date: {order.date}</p>
      <div className="mb-2">
        <p className="text-sm font-medium">Items:</p>
        <ul className="text-sm text-gray-700">
          {order.items.map((item, index) => (
            <li key={index}>{item.name} x{item.quantity} - ${item.price}</li>
          ))}
        </ul>
      </div>
      <p className="font-bold text-lg">Total: ${order.total}</p>
    </div>
  );
};

export default OrderCard;
