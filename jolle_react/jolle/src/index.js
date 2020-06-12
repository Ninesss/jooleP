import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'

import { PersistGate } from 'redux-persist/lib/integration/react';

// import the two exports from the last code snippet.
import { persistor,store} from './store';
// import your necessary custom components.

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <Router><App /></Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
