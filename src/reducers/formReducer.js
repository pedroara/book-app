const initialState = {
  changed: false,
  values: {},
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_LAST_SEARCH": {
      return { ...state, values: action.payload };
    }
    case "FORM_USED": {
      return { ...state, changed: true };
    }
    case "FORM_NOT_USED": {
      return { ...state, changed: false };
    }
    default:
      return state;
  }
}
