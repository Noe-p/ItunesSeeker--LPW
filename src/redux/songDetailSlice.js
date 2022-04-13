import { createSlice } from '@reduxjs/toolkit';

const songDetailSlice = createSlice({
  name: 'songDetail',
  initialState: {},
  reducers: {
    songDetail: (state, action) => {
      return action.payload;
    },
  },
});

export const { songDetail } = songDetailSlice.actions;
export const songDetailSelector = (state) => state;
export default songDetailSlice.reducer;
