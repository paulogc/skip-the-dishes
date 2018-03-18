import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from '../constants/cart';

const INITIAL_STATE = {
  ids: [],
  content: {},
};

function remove(state, action) {
  const ids = state.ids.filter(id => id !== action.payload);
  const content = {};
  ids.forEach(id => content[id] = state.content[id]);
  return {
    ids,
    content,
  };
}

export default function cartReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        ids: [...state.ids, action.payload.id],
        content: {
          ...state.content,
          [action.payload.id]: {
            ...action.payload,
          },
        },
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        ...remove({...state}, action),
      };
    default:
      return state;
  }
}
