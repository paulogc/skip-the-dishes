import axios from 'axios';
import queryString from 'query-string';

import { API_ENDPOINT, API_VERSION } from '../constants';
import { AUTH, AUTH_LOADING, AUTH_ERROR } from '../constants/auth';

export function authLoading() {
  return {
    type: AUTH_LOADING,
  };
};

export function authError() {
  return {
    type: AUTH_ERROR,
  };
};

export function authenticated(token) {
  return {
    type: AUTH,
    token,
  };
};

export function auth({ email, password }) {
  return async (dispatch) => {
    dispatch(authLoading());
    try {
      const response = await axios.post(
        `${API_ENDPOINT}${API_VERSION}/Customer/auth`,
        queryString.stringify({ email, password }),
      );
      if (response.status === 200 && response.statusText === 'OK') {
        dispatch(authenticated(response.data));
      }
    } catch (error) {
      dispatch(authError());
    }
  };
};
