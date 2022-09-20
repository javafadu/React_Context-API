import { types } from "../types";
import { counterInitialState } from "./counter-initial-state";

export const counterReducer = (state = counterInitialState, action) => {
  if (action.type === types.SET_COUNTER) {
    return { ...state, counter: action.payload };
  } else if (action.type === types.COUNTER_UP) {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === types.COUNTER_DOWN) {
    return { ...state, counter: state.counter - 1 };
  }
  return state;
};
