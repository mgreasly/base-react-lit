import React from 'react';
import ReactDOM from 'react-dom';
import '@ajusa/lit/dist/lit.css';
import '@ajusa/lit/dist/util.css';
import './index.css';
import App from './components/App';
import { Provider } from 'redux-zero/react';
import { store } from './store/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
