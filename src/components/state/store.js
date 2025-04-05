import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import usersReducer from "./users/usersSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer
    },
});

export const getRootState = () => store.getState();
export const dispatch = store.dispatch;
