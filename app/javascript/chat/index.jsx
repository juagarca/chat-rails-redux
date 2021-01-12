// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// internal modules
import App from './components/app';
import messagesReducer from './reducers/messages_reducer';

// State and reducers
const chatContainer = document.getElementById('chat_app');

if (chatContainer) {
  const channels = JSON.parse(chatContainer.dataset.channels);

  const initialState = {
    channels: channels,
    messages: []
  };

  const identityReducer = (state = null) => state;

  const reducers = combineReducers({
    channels: identityReducer,
    messages: messagesReducer
  });

  const middlewares = applyMiddleware(reduxPromise, logger);

  const store = createStore(reducers, initialState, middlewares);

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/channels/:channel" component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    chatContainer
  );
}

