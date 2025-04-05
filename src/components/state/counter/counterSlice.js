import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

const counterSlice= createSlice({
    name: 'counter',
    initialState,
    reducers :{
        increment:(state) =>{
            state.value +=1;
        },
        decrement:(state)=>{
            state.value -=1;
        },
        incrementByAmount:(state,action)=>{
            state.value += action.payload
        },
        decrementByAmount:(state,action)=>{
            state.value -= action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, () => {
                console.log("pending");
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.value += action.payload;
            })
    }
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
)
export const {increment, decrement , incrementByAmount , decrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;