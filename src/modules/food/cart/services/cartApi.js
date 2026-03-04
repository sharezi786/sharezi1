export const checkoutCartApi = async (cartItems) => {
  // Simulate API call to checkout cart
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        orderId: Date.now(),
        status: 'confirmed',
        items: cartItems,
        total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      });
    }, 1000);
  });
};
