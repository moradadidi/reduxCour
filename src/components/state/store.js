import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import usersReducer from "./users/usersSlice";
import articleReducer from "./article/articleSlice";
import panierReducer from "./panier/panierSlice";
import studentsReducer from "./students/studentSlice";
import carReducer from "../exercice3/slice/carSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        article: articleReducer,
        panier:panierReducer,
        students:studentsReducer,
        car : carReducer,
        
        
    },
});

export const getRootState = () => store.getState();
export const dispatch = store.dispatch;
