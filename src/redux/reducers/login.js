import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name:"login",
  initialState:{
    user: "",
  },
  reducers: {
    isLogin: (state, action) => {
      state.user = action.payload;
    },
    isLogout: (state) => {
      state.user = "";
    },
  },
})

export const { isLogin, isLogout} = loginSlice.actions;
export const loginUser = (state) => state.login.user;

export default loginSlice.reducer;

