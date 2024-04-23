
import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from './reducers/anecdoteReducer'
import FilterReducer from './reducers/FilterReducer'


const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: FilterReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
