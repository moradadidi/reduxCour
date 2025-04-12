// panierActions.js

export const addPanier = ({ name, price, quantity }) => ({
    type: 'ADD_PANIER',
    payload: { name, price, quantity },
  });
  
  export const removePanier = (id) => ({
    type: 'REMOVE_PANIER',
    payload: { id },
  });
  
  export const clearPanier = () => ({
    type: 'CLEAR_PANIER',
  });
  
  export default { addPanier, removePanier, clearPanier };  