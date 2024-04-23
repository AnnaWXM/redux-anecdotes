// AnecdoteForm.jsx
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification, setTimedNotification } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const [anecdote, setAnecdote] = useState('')

  const createAnecdote = async(event) => {
    event.preventDefault();
    const content = event.target.anecdote.value
    event.target.note.value = ''
    dispatch(addAnecdote(content));
    dispatch(setTimedNotification({ message: `New anecdote "${anecdote}" created`, duration: 10 }));
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