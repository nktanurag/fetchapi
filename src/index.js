//external imports
import React from 'react';
import { render } from 'react-dom'
import ReactDOM  from 'react-dom/client';
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//assets
import './index.css';

//local imports
import App from './App';
import rootReducer from './reducers';




//Creates a Redux store that holds the complete state tree of your app
//createStore(reducer, [preloadedState], [enhancer])
//reducer - returns the next state tree, given the current state tree and an action to handle
//[preloadedState] - initial state
//[enhancer]-store enhancer to enhance the store with third-party capabilities such as middleware, time travel, persistence
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));

//The <Provider> component makes the Redux store available to any 
//nested components that need to access the Redux store.
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
