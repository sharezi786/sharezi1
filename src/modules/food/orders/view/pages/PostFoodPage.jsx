import React, { useState } from 'react';
import useOrdersController from '../../controller/useOrdersController';

const PostFoodPage = () => {
  const { createOrder, loading, error } = useOrdersController();
  const [formData, setFormData] = useState({
    foodName: '',
    description: '',
    price: 0,
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(formData);
    setFormData({
      foodName: '',
      description: '',
      price: 0,
      quantity: 1,
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Post Food for Sale</h1>
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block text-sm font-medium mb-1">Food Name</label>
          <input
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            placeholder="Enter food name"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Posting...' : 'Post Food'}
        </button>
      </form>
    </div>
  );
};

export default PostFoodPage;
