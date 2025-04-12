import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    panier: [       
           {id:1 , name: 'Panier 1', price: 10.99, quantity: 1 },
           {id:2 , name: 'Panier 2', price: 19.99, quantity: 2},
           {id:3 , name: 'Panier 3', price: 29.99, quantity: 5 },
    ],
};

export const panierSlice = createSlice({
    name: "panier",
    initialState,
    reducers: {
        addPanier : (state, action) => {
            const newPanier = {id: state.panier.length + 1, name: action.payload.name, price: action.payload.price, quantity: action.payload.quantity }; 
            state.panier.push(newPanier);
        },
        removePanier : (state, action) => {
            state.panier = state.panier.filter((panier) => panier.id !== action.payload.id);
        },
        clearPanier : (state) => {
            state.panier = [];
        }
    },
});

export const { addPanier, removePanier , clearPanier } = panierSlice.actions; 

export default panierSlice.reducer;