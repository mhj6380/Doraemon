import * as type from "../constants/actionTypes";

const authState = {
  sample: "",
};

const auth = (state = authState, action) => {
  switch (action.type) {
    case type.SAMPLE_ACTION:
      return {
        ...state,
        sample: action.data,
      };

    default:
      return state;
  }
};

export default auth;
