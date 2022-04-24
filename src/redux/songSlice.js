import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      return [...state, { ...action.payload.song, rate: action.payload.rate }];
    },
    removeSong: (state, action) => {
      return state.filter((el) => el.id != action.payload.id);
    },
    updateRate: (state, action) => {
      return state.map((ele) =>
        ele.id === action.payload.id
          ? { ...ele, rate: action.payload.rate }
          : ele
      );
    },
  },
});

export const { addSong, removeSong, updateRate, filterState } =
  songSlice.actions;
export const songSelector = (state) => state;

export default songSlice.reducer;
