const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};
// 1 forma
// const reducer = (state, action) => {
// if(action.type === "type")
// }

// 2 forma
const reducerSwitch = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return { ...state, error: true, loading: false };
    case "CHECK":
      return { ...state, loading: true };
    default:
      return { ...initialState };
  }
};

// 3 forma
const reducerObject = (state, payload = {}) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.check]: { ...state, loading: true },
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  [actionTypes.delete]: { ...state, deleted: true },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
  [actionTypes.write]: { ...state, value: payload.value },
});

const actionTypes = {
  error: "ERROR",
  check: "CHECK",
  confirm: "CONFIRM",
  delete: "DELETE",
  reset: "RESET",
  write: "WRITE",
};

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export { initialState, reducer, actionTypes };
