import React, { useEffect } from 'react';
import useOrdersController from '../../controller/useOrdersController';
import OrderCard from '../components/OrderCard';

const OrdersPage = () => {
  const { orders, loading, error, fetchOrders } = useOrdersController();

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (loading) return <div className="p-4">Loading orders...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
