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


Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: "userMovie",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  }
});

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

