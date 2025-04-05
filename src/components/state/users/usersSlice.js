import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [{id: 1, name: 'John Doe', age: 30 , email: 'I2A2u@example.com' , createdAt: new Date()}, {id: 2, name: 'Jane Doe', age: 25 , email: 'I2A2u@example.com' , createdAt: new Date()}],
};

export  const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser : (state, action) => {
            const newUser = {id: state.users.length + 1, name: action.payload.name, age: action.payload.age , email: action.payload.email , createdAt: new Date()}; ;
            state.users.push(newUser);
        },
        
        removeUser : (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload.id);
        }, updateUser: (state, action) => {
            const { id, name, age, email } = action.payload;
            const user = state.users.find((user) => user.id === id);
            if (user) {
              user.name = name;
              user.age = age;   
              user.email = email;
            }}
        
    }    
})

export const { addUser , removeUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer