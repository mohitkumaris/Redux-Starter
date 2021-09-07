import store from "./store";
import { ADD_BUG, REMOVE_BUG } from "./actionTypes";

const unSubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});
// Action dispatches
store.dispatch({
  type: ADD_BUG,
  payload: {
    description: "Bug 2",
  },
});
unSubscribe(); // use when user is navigated away from UI component.
store.dispatch({
  type: REMOVE_BUG,
  payload: {
    id: 1,
  },
});
console.log(store.getState());
