import store from "./store";
import { bugAdd, bugRemoved, bugResolved } from "./actions";

const unSubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});
// Action dispatches
store.dispatch(bugAdd("Bug Added"));
//unSubscribe(); // use when user is navigated away from UI component.
//store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(1));
console.log(store.getState());
