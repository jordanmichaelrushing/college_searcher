import { COLLEGES_FETCH_REQUEST, COLLEGES_FETCH_SUCCESS, COLLEGES_FETCH_FAILURE } from '../constants';
const INITIAL_STATE = { colleges: [], lat: null, lng: null, meta: null, isFetching: false, isError: false, errorMessage: null };
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case COLLEGES_FETCH_REQUEST:
      return { ...state, isFetching: true, isError: false, errorMessage: null };
    case COLLEGES_FETCH_SUCCESS:
      return { ...state, isFetching: false, isError: false, colleges: action.payload.data.results, lat: action.payload.data.lat, lng: action.payload.data.lng, meta: action.payload.meta };
    case COLLEGES_FETCH_FAILURE:
      return { ...state, isFetching: false, isError: true, errorMessage: action.payload };
    default:
      return state;
  }
}