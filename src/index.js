import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as  Router } from 'react-router-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReactReduxContext.Provider value={store} >
<Provider store={store}>
<PersistGate persistor={persistor}>

    <Router>
      <Fragment>
      <App />
      </Fragment>
    </Router>
  </PersistGate>
</Provider>

    </ReactReduxContext.Provider >

  
  
);

