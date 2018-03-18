import axios from 'axios';

import { API_ENDPOINT, API_VERSION } from '../constants';
import {
  COUSINES,
  COUSINES_LOADING,
  COUSINES_ERROR,
} from '../constants/cousines';

export function cousinesLoading() {
  return {
    type: COUSINES_LOADING,
  };
};

export function cousinesError() {
  return {
    type: COUSINES_ERROR,
  };
};

export function cousinesLoaded(cousines) {
  return {
    type: COUSINES,
    cousines,
  };
};

export function cousines() {
  return async (dispatch) => {
    dispatch(cousinesLoading());
    try {
      const response = await axios.get(
        `${API_ENDPOINT}${API_VERSION}/Store`
      );
      if (response.status === 200 && response.statusText === 'OK') {
        dispatch(cousinesLoaded(response.data));
      }
    } catch (error) {
      dispatch(cousinesError());
    }
  };
};
