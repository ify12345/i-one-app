/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { User } from '@/src/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EmailVerification, login, register} from '@/api/auth';


interface State {
  user: User;
  isAuthenticated: boolean;
  isVerified: boolean;
  isPhoneVerified: boolean;
}

const initialState: State = {
  user: {},
  isAuthenticated: false,
  isVerified: false,
  isPhoneVerified: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUserDetails: (state, actions: PayloadAction<User>) => {
      state.user = {...state.user, ...actions.payload};
    },
    success: state => {
      state.isVerified = true;
    },
    logout: () => ({...initialState}),
  },
  extraReducers(builder) {
    builder.addCase(register.fulfilled, (state, {payload}) => {
      state.user = payload;
      console.log('payload:', payload);

      state.isAuthenticated = true;
    });
    builder
      .addCase(login.pending, state => {
        state.isAuthenticated = false;
        state.isVerified = false;
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.user = payload;
        console.log('login payload:', state.user);
        state.isAuthenticated = true;
      });
    builder
      .addCase(EmailVerification.pending, state => {
        state.isAuthenticated = false;
        state.isVerified = false;
        state.isPhoneVerified = false;
      })
      .addCase(EmailVerification.fulfilled, (state, {payload}) => {
        state.isAuthenticated = true;
        state.isVerified = payload.email_verified;
        state.isPhoneVerified = payload.phone_verified;
      });
  },
});

export const {getUserDetails, success, logout} = authSlice.actions;
export default authSlice.reducer;
