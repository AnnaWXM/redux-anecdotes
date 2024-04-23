// AnecdoteForm.jsx
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const [anecdote, setAnecdote] = useState('')

  const createAnecdote = async(event) => {
    event.preventDefault();
    const content = event.target.anecdote.value
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newAnecdote));

    dispatch(setNotification(`New anecdote "${anecdote}" created`)); // Dispatch notification action
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