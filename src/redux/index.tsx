import { configureStore } from '@reduxjs/toolkit';
import userInfo from './reducers';

const store = configureStore({
  reducer: {
    userInfo,
  },
});
export default store;
