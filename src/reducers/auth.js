import { AUTH, AUTH_LOADING, AUTH_ERROR, AUTH_LOGOUT } from '../constants/auth';

const INICIAL_STATE = {
  loading: false,
  error: false,
  authenticated: false,
}

export default function authReducer(state = INICIAL_STATE, action) {
  switch(action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true, error: false };
    case AUTH:
      return {
        ...state,
        authenticated: true,
        error: false,
        loading: false,
        token: action.token,
      };
    case AUTH_ERROR:
      return { ...state, error: true, loading: false };
    case AUTH_LOGOUT:
      return INICIAL_STATE;
    default:
      return state;
  };
}
