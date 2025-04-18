import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    students: [{id: 1, name: 'John Doe', age: 30 , email: 'I2A2u@example.com' , createdAt: new Date()}, {id: 2, name: 'Jane Doe', age: 25 , email: 'I2A2u@example.com' , createdAt: new Date()}],
};

export  const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent : (state, action) => {
            const newStudent = {id: state.students.length + 1, name: action.payload.name, age: action.payload.age , email: action.payload.email , createdAt: new Date()}; ;
            state.students.push(newStudent);
            toast.success("Student added successfully");
        },
        removeStudent : (state, action) => {
            state.students = state.students.filter((student) => student.id !== action.payload.id);
            toast.error("Student deleted successfully");
        },
        clearStudents : (state) => {
            state.students = [];
            toast.error("Students deleted successfully");
        },

        
    }
})

export const {addStudent, removeStudent , clearStudents} = studentSlice.actions
export default studentSlice.reducer