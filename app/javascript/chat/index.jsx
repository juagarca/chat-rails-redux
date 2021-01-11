// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import selectedChannelReducer from './reducers/selected_channel_reducer';
import messagesReducer from './reducers/messages_reducer';


function username() {
  const username = window.prompt("Enter your username, or leave it blank to be anonymous");
  if (username === "") {
    return `anonymous${Math.floor(10 + (Math.random() * 90))}`;
  }
  return username;
}

const initialState = {
  username: username(),
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  messages: []
};

const identityReducer = (state = null) => state;

// State and reducers
const reducers = combineReducers({
  username: identityReducer,
  channels: identityReducer,
  selectedChannel: selectedChannelReducer,
  messages: messagesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
