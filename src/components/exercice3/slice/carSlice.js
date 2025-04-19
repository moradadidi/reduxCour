import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // cars: [],
};

export const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        // addCar: (state, action) => {
        //     state.cars.push(action.payload);
        // },
        // removeCar: (state, action) => {
        //     state.cars = state.cars.filter((car) => car.id !== action.payload);
        // }
    }
});

export const { addCar, removeCar } = carSlice.actions;

export default carSlice.reducer;

    