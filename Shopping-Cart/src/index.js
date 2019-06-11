import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import purchaseReducer from './components/reducers/purchaseReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(purchaseReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

