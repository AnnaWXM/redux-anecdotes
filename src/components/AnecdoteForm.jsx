// AnecdoteForm.jsx
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const [anecdote, setAnecdote] = useState('')

  const createAnecdote = (event) => {
    event.preventDefault();
    dispatch(addAnecdote(anecdote));
    dispatch(setNotification(`New anecdote "${anecdote}" created`)); // Dispatch notification action
    setAnecdote('');
    setTimeout(() => {
      dispatch(clearNotification()); // Dispatch clear notification action after 5 seconds
    }, 5000);
  };

  return (
    <div>
      <h2>Create New</h2>
      <form onSubmit={createAnecdote}>
        <div><input value={anecdote} onChange={(e) => setAnecdote(e.target.value)} /></div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;