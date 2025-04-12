import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import usersReducer from "./users/usersSlice";
import articleReducer from "./article/articleSlice";
import panierReducer from "./panier/panierSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        article: articleReducer,
        panier:panierReducer
        
    },
});

export const getRootState = () => store.getState();
export const dispatch = store.dispatch;
