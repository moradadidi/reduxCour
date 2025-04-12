// store.js
import { createStore } from 'redux';
import panierReducer from '../reducers/panierReducer';

const store = createStore(
  panierReducer,
  // For Redux devtools extension support, you may add:
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
