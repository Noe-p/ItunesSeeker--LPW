import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      return [...state, action.payload];
    },
    removeSong: (state, action) => {
      return state.filter(function (el) {
        return el.id != action.payload.id;
      });
    },
  },
});

export const { addSong, removeSong } = songSlice.actions;
export const songSelector = (state) => state;
export default songSlice.reducer;
