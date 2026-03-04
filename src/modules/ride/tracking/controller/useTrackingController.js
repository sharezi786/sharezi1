import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLocation, setRoute, startTracking, stopTracking, setError } from '../model/trackingSlice';
import { getCurrentLocationApi, getRouteApi, startTrackingApi, stopTrackingApi } from '../services/trackingApi';

const useTrackingController = () => {
  const dispatch = useDispatch();
  const { currentLocation, route, isTracking, error } = useSelector(state => state.tracking);

  const getCurrentLocation = async () => {
    try {
      const location = await getCurrentLocationApi();
      dispatch(setCurrentLocation(location));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const getRoute = async (origin, destination) => {
    try {
      const routeData = await getRouteApi(origin, destination);
      dispatch(setRoute(routeData));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const startTrackingRide = async (rideId) => {
    try {
      await startTrackingApi(rideId);
      dispatch(startTracking());
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const stopTrackingRide = async (rideId) => {
    try {
      await stopTrackingApi(rideId);
      dispatch(stopTracking());
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  return { currentLocation, route, isTracking, error, getCurrentLocation, getRoute, startTrackingRide, stopTrackingRide };
};

export default useTrackingController;
