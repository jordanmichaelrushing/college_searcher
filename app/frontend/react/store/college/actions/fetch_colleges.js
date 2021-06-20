import axios from 'axios';
import { COLLEGES_FETCH_REQUEST, COLLEGES_FETCH_SUCCESS, COLLEGES_FETCH_FAILURE } from '../constants';
function requesting() {
  return { type: COLLEGES_FETCH_REQUEST };
}
function requestSuccess(data) {
  return {
    type: COLLEGES_FETCH_SUCCESS,
    payload: { data: data.data, meta: data.meta }
  };
}
function requestError(error) {
  return {
    type: COLLEGES_FETCH_FAILURE,
    payload: error
  };
}
export default function fetchColleges(args = {}) {
  // Request parameters
  const params = {};
  const page = args['page'];
  const name = args['name'];

  if (typeof (page) !== 'undefined' || page !== 'undefined') {
    params["page"] = page
  }
  if (typeof (name) !== 'undefined' || name !== 'undefined') {
    params["name"] = name
  }
  return function (dispatch) {
    dispatch(requesting());
    axios.get(`/api/v1/colleges.json`, { params })
      .then(response => {
        dispatch(requestSuccess(response.data));
      })
      .catch(error => {
        dispatch(requestError('Oops!! Please try after sometime.'));
      });
  };
}