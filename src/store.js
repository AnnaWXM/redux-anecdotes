// store.js
import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from './reducers/anecdoteReducer'
import FilterReducer from './reducers/FilterReducer'
import notificationReducer from './reducers/notificationReducer';

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: FilterReducer,
    notification: notificationReducer, // Add this line
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;