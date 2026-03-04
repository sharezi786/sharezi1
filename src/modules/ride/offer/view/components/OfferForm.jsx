import React, { useState } from 'react';

const OfferForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    from: initialData.from || '',
    to: initialData.to || '',
    date: initialData.date || '',
    seats: initialData.seats || 1,
    price: initialData.price || 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium mb-1">From</label>
        <input
          name="from"
          value={formData.from}
          onChange={handleChange}
          placeholder="Departure location"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">To</label>
        <input
          name="to"
          value={formData.to}
          onChange={handleChange}
          placeholder="Destination"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Available Seats</label>
        <input
          name="seats"
          type="number"
          value={formData.seats}
          onChange={handleChange}
          min="1"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Price per Seat</label>
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
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {initialData.id ? 'Update Offer' : 'Create Offer'}
      </button>
    </form>
  );
};

export default OfferForm;
