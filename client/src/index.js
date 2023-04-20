import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(<App/> , document.getElementById('root'));