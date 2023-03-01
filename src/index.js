import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import rootReducer from "./components/reducers/index";
import { addList, removeMovie } from './components/actions/FavAction';

const myLogger = store => next => action => {
	console.log('%c[Middleware] Şimdiki state:', 'color:red',store.getState());
  console.log('%c[Middleware] Şu aksiyon dispatch edilecek:', 'color:green', action);
  const startTime = performance.now(); 
  const result = next(action);
  const endTime = performance.now();
  console.log(`[Middleware] Aksiyon süresi: ${endTime - startTime}ms`);
  console.log('%c[Middleware] Sonraki state:','color:blue',store.getState());
  return result;

};

const Logger = store => next => action => {
  try {
    const result = next(action);
    console.log('[Middleware] Sonraki state:', store.getState());
    return result;
  } catch (error) {
    console.error('[Middleware] Bir hata oluştu:', error);
    console.log('[Middleware] Şimdiki state:', store.getState());
    console.log('[Middleware] Şu aksiyon dispatch edilemedi:', action);
    throw error;
  }
};

const store=createStore(rootReducer, applyMiddleware(myLogger,Logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default store;