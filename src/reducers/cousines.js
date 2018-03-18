import {
  COUSINES,
  COUSINES_LOADING,
  COUSINES_ERROR,
} from '../constants/cousines';

const INITIAL_STATE = {
  loading: false,
  error: false,
  cousines: [],
}

export default function cousinesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case COUSINES_LOADING:
      return { ...state, loading: true };
    case COUSINES:
      return { ...state, loading: false, cousines: action.cousines };
    case COUSINES_ERROR:
      return { ...state, loading: false, error: true }
    default:
      return state;
  }
}
