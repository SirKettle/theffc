import googlePlaceJson from '../../../mock/data/googlePlace.json';
import { googlePlaceId } from '../../constants/site';

export const actionTypes = {
  LOAD_GOOGLE_PLACE_PENDING: 'LOAD_GOOGLE_PLACE_PENDING',
  LOAD_GOOGLE_PLACE_SUCCESS: 'LOAD_GOOGLE_PLACE_SUCCESS',
  LOAD_GOOGLE_PLACE_ERROR: 'LOAD_GOOGLE_PLACE_ERROR'
};

const isDebugMode = false;

export function loadGooglePlace(dispatch) {
  const google = window.google;

  dispatch({
    type: actionTypes.LOAD_GOOGLE_PLACE_PENDING
  });

  if (isDebugMode) {
    setTimeout(() => {
      dispatch({
        type: actionTypes.LOAD_GOOGLE_PLACE_SUCCESS,
        payload: googlePlaceJson
      });
    }, 300);
    return null;
  }


  if (!google) {
    console.warn('window google not defined');
    return null;
  }

  const request = {
    placeId: googlePlaceId
    // fields: ['reviews']
  };

  const service = new google.maps.places.PlacesService(document.getElementById('googlePlaceTargetId'));
  return service.getDetails(request, (place, status) => {
    if (status === 'OK') {
      dispatch({
        type: actionTypes.LOAD_GOOGLE_PLACE_SUCCESS,
        payload: place
      });
    }
  });
}
