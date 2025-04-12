import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from './components/aStore/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
    <App />
    </Provider>
  </StrictMode>,
)
