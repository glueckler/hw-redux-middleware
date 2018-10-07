// Root.js is an easy way to give any component access to Redux Provider 
// essentially useful for testing

// Root.js is probably not necessary, but for learning purposes
// in RL maybe just make another component in index.js?
import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from 'reducers'
import reduxPromise from 'redux-promise'


export default (props) => {
  const store = createStore(reducers, {...props.initialState}, applyMiddleware(reduxPromise))
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}