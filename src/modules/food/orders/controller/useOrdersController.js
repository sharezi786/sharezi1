import { useDispatch, useSelector } from 'react-redux';
import { setOrders, addOrder, setLoading, setError } from '../model/ordersSlice';
import { fetchOrdersApi, createOrderApi } from '../services/ordersApi';

const useOrdersController = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector(state => state.orders);

  const fetchOrders = async () => {
    dispatch(setLoading());
    try {
      const data = await fetchOrdersApi();
      dispatch(setOrders(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const createOrder = async (orderData) => {
    dispatch(setLoading());
    try {
      const newOrder = await createOrderApi(orderData);
      dispatch(addOrder(newOrder));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  return { orders, loading, error, fetchOrders, createOrder };
};

export default useOrdersController;
