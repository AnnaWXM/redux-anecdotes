// main.jsx
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'
import store from './store'
import filterReducer from './reducers/FilterReducer'
import anecdoteService from './services/anecdotes'
import anecdoteReducer, { appendAnecdote, setAnecdotes } from './reducers/anecdoteReducer'


anecdoteService.getAll().then(anecdotes =>
  store.dispatch(setAnecdotes(anecdotes))
)

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
