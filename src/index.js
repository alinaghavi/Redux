import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './Components/App';
import {  createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers/rootReducer';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    responseType: 'json'
});
const store = createStore(
    rootReducer,
    applyMiddleware(axiosMiddleware(client)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));