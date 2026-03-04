export const fetchMenuItemsApi = async () => {
  // Simulate API call to fetch menu items
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Margherita Pizza',
          price: 12,
          description: 'Classic pizza with tomato sauce, mozzarella, and basil',
          image: '/images/pizza.jpg',
        },
        {
          id: 2,
          name: 'Burger',
          price: 8,
          description: 'Juicy beef burger with lettuce, tomato, and cheese',
          image: '/images/burger.jpg',
        },
        {
          id: 3,
          name: 'Pasta',
          price: 10,
          description: 'Creamy Alfredo pasta with chicken',
          image: '/images/pasta.jpg',
        },
      ]);
    }, 1000);
  });
};
