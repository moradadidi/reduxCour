// panierReducer.js
import { produce } from 'immer';

const initialState = {
  panier: [
    { id: 1, name: 'Panier 1', price: 10.99, quantity: 1 },
    { id: 2, name: 'Panier 2', price: 19.99, quantity: 2 },
    { id: 3, name: 'Panier 3', price: 29.99, quantity: 5 },
  ],
};


const panierReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ADD_PANIER': {
        const newPanier = {
          id: draft.panier.length + 1,
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
        };
        draft.panier.push(newPanier);
        break;
      }
      case 'REMOVE_PANIER': {
        draft.panier = draft.panier.filter(
          item => item.id !== action.payload.id
        );
        break;
      }
      case 'CLEAR_PANIER': {
        draft.panier = [];
        break;
      }
      default:
        // no action – return unchanged draft
        break;
    }
  });

export default panierReducer;
