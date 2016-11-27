import axios from 'axios';
import {
  FETCH_DATA,
  FETCH_SUCCESS,
  FETCH_FAIL
} from './types';

export const fetchFromInternet = (url) => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA });
    axios.get(url)
      .then((response) => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data.posts })
      .catch(() => {
        dispatch({ type: FETCH_FAIL });
      });
      });
  };
};
