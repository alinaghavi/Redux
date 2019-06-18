import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './Components/App';
import {  createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers/rootReducer'


const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));