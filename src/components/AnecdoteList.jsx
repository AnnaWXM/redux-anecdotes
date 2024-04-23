// AnecdoteList.jsx
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setFilter } from '../reducers/FilterReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer';
import Notification from './Notification';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const filteredAnecdotes = filter
    ? anecdotes.filter(anecdote =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
    : anecdotes

  const vote = (id, content) => {
    dispatch(voteAnecdote(id));
    dispatch(setNotification(`You voted for "${content}"`));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setNotification(''));
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const sortedAnecdotes = filteredAnecdotes.slice().sort((a, b) => b.votes - a.votes)

  return (
    <div>
      <Notification />
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
