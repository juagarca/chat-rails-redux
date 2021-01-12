// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import App from './components/app';
import messagesReducer from './reducers/messages_reducer';



const initialState = {
  // username: username(),
  channels: ["general", "react", "paris"],
  // selectedChannel: "general",
  messages: []
};

const identityReducer = (state = null) => state;

// State and reducers
const reducers = combineReducers({
  // username: identityReducer,
  channels: identityReducer,
  // selectedChannel: selectedChannelReducer,
  messages: messagesReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);
const chatContainer = document.getElementById('chat_app');
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(store)}>
    <BrowserRouter>
      <Switch>
        <Route path="/channels/:channel" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  chatContainer
);
