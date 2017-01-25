import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore, combineReducers, compose } from 'redux'
// import { Provider } from 'react-redux'

// import * as reducers from './reducers'
import App from './App'

// const reducer = combineReducers(reducers)

// Note: passing enhancer as the last argument requires redux@>=3.1.0
// const store = createStore(reducer)

ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
);
