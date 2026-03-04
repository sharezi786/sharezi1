export const createOfferApi = async (offerData) => {
  // Simulate API call to create a new ride offer
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: Date.now(), ...offerData, status: 'active' });
    }, 1000);
  });
};

export const fetchOffersApi = async () => {
  // Simulate API call to fetch user's ride offers
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          from: 'Location A',
          to: 'Location B',
          date: '2023-10-01',
          seats: 4,
          price: 20,
          status: 'active',
        },
        {
          id: 2,
          from: 'Location C',
          to: 'Location D',
          date: '2023-10-02',
          seats: 2,
          price: 15,
          status: 'completed',
        },
      ]);
    }, 1000);
  });
};

export const updateOfferApi = async (id, updateData) => {
  // Simulate API call to update a ride offer
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, ...updateData });
    }, 1000);
  });
};

export const deleteOfferApi = async (id) => {
  // Simulate API call to delete a ride offer
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};
