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
  } = meta;

  return {
    ...state,
    [type]: status,
  };
}
