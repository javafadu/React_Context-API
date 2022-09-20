import { types } from "../types";

export const setCounter = (value) => ({
    type: types.SET_COUNTER,
    payload: value
});

export const counterUp = () => ({
    type: types.COUNTER_UP
});

export const counterDown = () => ({
    type: types.COUNTER_DOWN
});
