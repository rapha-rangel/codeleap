import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/login';
import listReducer from '../reducers/list';

export default configureStore({
  reducer: {
    login: loginReducer,
    list: listReducer,
  },
});