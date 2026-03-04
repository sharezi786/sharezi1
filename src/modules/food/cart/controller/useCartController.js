import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from '../model/cartSlice';
import { checkoutCartApi } from '../services/cartApi';

const useCartController = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector(state => state.cart);

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const checkout = async () => {
    try {
      const result = await checkoutCartApi(items);
      clearCartItems();
      return result;
    } catch (err) {
      throw new Error('Checkout failed');
    }
  };

  return { items, total, addToCart, removeFromCart, clearCartItems, checkout };
};

export default useCartController;
