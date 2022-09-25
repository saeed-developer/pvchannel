import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import './index.css';
import './i18n/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
