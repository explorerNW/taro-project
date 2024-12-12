import { createSlice } from '@reduxjs/toolkit';

export interface IUserInfo {
  name: string;
  login: boolean;
  permissions: string[];
  loginAt: string;
}

export const userInfo = createSlice({
  name: 'userInfo',
  initialState: {
    user: {
      name: '',
      login: false,
      permissions: [],
      loginAt: '',
    },
  },
  reducers: {
    setUserInfoHandler: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserInfoHandler } = userInfo.actions;
export default userInfo.reducer;
