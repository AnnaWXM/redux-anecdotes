
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  duration: null
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      setNotification: (state, action) => {
        state.message = action.payload;
      },
      clearNotification: state => {
        state.message = '';
      },
      setTimedNotification: (state, action) => {
        state.message = action.payload.message;
        state.duration = action.payload.duration;
      }
    },
  });

  export const { setNotification, clearNotification, setTimedNotification } = notificationSlice.actions;
  export default notificationSlice.reducer;
