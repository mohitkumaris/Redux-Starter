import * as actions from "./actionTypes";

export const bugAdd = (description) => {
  return {
    type: actions.ADD_BUG,
    payload: {
      description,
    },
  };
};

export const bugRemoved = (id) => {
  return {
    type: actions.REMOVE_BUG,
    payload: {
      id,
    },
  };
};

export const bugResolved = (id) => {
  return {
    type: actions.RESOLVED_BUG,
    payload: {
      id,
    },
  };
};
