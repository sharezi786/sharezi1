import React from 'react';
import useCartController from '../../controller/useCartController';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { items, total, removeFromCart, checkout } = useCartController();

  const handleCheckout = async () => {
    try {
      await checkout();
      alert('Order placed successfully!');
    } catch (err) {
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {items.map(item => (
              <CartItem key={item.id} item={item} onRemove={removeFromCart} />
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
