import { useDispatch, useSelector } from 'react-redux';
import { setHistory, setLoading, setError } from '../model/historySlice';
import { fetchHistoryApi } from '../services/historyApi';

const useHistoryController = () => {
  const dispatch = useDispatch();
  const { rides, loading, error } = useSelector(state => state.history);

  const fetchHistory = async () => {
    dispatch(setLoading());
    try {
      const data = await fetchHistoryApi();
      dispatch(setHistory(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  return { rides, loading, error, fetchHistory };
};

export default useHistoryController;
