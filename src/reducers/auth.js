import { AUTH, AUTH_LOADING, AUTH_ERROR } from '../constants/auth';

const INICIAL_STATE = {
  loading: false,
  error: false,
  authenticated: false,
}

export default function authReducer(state = INICIAL_STATE, action) {
  switch(action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true };
    case AUTH:
      return {
        ...state,
        authenticated: true,
        loading: false,
        token: action.token,
      };
    case AUTH_ERROR:
      return { ...state, error: true, loading: false };
    default:
      return state;
  };
}
