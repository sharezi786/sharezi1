import { useDispatch, useSelector } from 'react-redux';
import { setItems, setLoading, setError } from '../model/menuSlice';
import { fetchMenuItemsApi } from '../services/menuApi';

const useMenuController = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.menu);

  const fetchItems = async () => {
    dispatch(setLoading());
    try {
      const data = await fetchMenuItemsApi();
      dispatch(setItems(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  return { items, loading, error, fetchItems };
};

export default useMenuController;
