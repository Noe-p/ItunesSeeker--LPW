import { configureStore } from '@reduxjs/toolkit';
import songDetailReducer from './src/redux/songDetailSlice';
export default configureStore({
  reducer: {
    songDetail: songDetailReducer,
  },
});
