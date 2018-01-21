export default function appStatus(state = {}, action = {}) {
  const {
    meta,
  } = action;

  if (!meta) {
    return state;
  }

  const {
    type,
    status,
    selector,
  } = meta;

  return {
    ...state,
    [`${type}:${selector}`]: status,
  };
}
