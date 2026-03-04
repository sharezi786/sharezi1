export const fetchOrdersApi = async () => {
  // Simulate API call to fetch user orders
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          items: [
            { name: 'Pizza', quantity: 2, price: 10 },
            { name: 'Burger', quantity: 1, price: 8 },
          ],
          total: 28,
          status: 'delivered',
          date: '2023-10-01',
        },
        {
          id: 2,
          items: [
            { name: 'Pasta', quantity: 1, price: 10 },
          ],
          total: 10,
          status: 'in transit',
          date: '2023-10-02',
        },
      ]);
    }, 1000);
  });
};

export const createOrderApi = async (orderData) => {
  // Simulate API call to create a new order
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now(),
        ...orderData,
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
      });
    }, 1000);
  });
};
