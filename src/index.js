import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducer/reducer';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export const store = createStore(
  rootReducer(),
  composeSetup(applyMiddleware(thunk)),
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
