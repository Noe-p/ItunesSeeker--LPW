import { configureStore } from '@reduxjs/toolkit';
import songDetailReducer from './src/redux/songDetailSlice';
import songReducer from './src/redux/songSlice';

export default configureStore({
  reducer: {
    songDetail: songDetailReducer,
    song: songReducer,
  },
});
