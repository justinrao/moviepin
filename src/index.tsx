import Amplify from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import aws_exports from './aws-exports';
import config from './config';
import './index.css';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import aws from './aws';

aws.configure();

ReactDOM.render(
  (<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

