export const fetchHistoryApi = async () => {
  // Simulate API call to fetch ride history
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          date: '2023-10-01',
          from: 'Location A',
          to: 'Location B',
          status: 'completed',
          cost: 50,
        },
        {
          id: 2,
          date: '2023-10-02',
          from: 'Location C',
          to: 'Location D',
          status: 'cancelled',
          cost: 0,
        },
        // Add more mock data as needed
      ]);
    }, 1000);
  });
};
