//App.jsx
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import anecdoteService from './services/anecdotes'
import anecdoteReducer, { appendAnecdote, setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])

  return (
    <Provider store={store}>
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    </Provider>
  );
}

export default App;
