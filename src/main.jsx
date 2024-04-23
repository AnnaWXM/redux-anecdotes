// main.jsx
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'
import store from './store'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/FilterReducer'



console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
