/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig, LoginPayload, RegisterPayload } from "@/src/types/api";
import { LoginResponse, RegisterResponse } from "@/src/types/apiResponse";
import AxiosBase from "./axios";

interface ErrorPayload {
  response?: {
    data?: { error?: string };
    status: number;
  };
}

export const register = createAsyncThunk<RegisterResponse, RegisterPayload, AsyncThunkConfig>(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      const Axios = await AxiosBase();
      const { data } = await Axios.post('/register', payload);
      console.log('data',data);
      return data;
    
     
    } catch (err) {
      const error = err as ErrorPayload;
      console.log('new error',error.response?.data);
      if (!error.response) {
        return thunkAPI.rejectWithValue({ msg: "Network Error", status: 500 });
      }
      return thunkAPI.rejectWithValue({
        msg: error.response.data?.error || "An error occurred",
        status: error.response.status,
      });
    }
  }
);

export const login = createAsyncThunk<LoginResponse, LoginPayload, AsyncThunkConfig>(
  "auth/sign-in",
  async (payload, thunkAPI) => {
    try {
      const Axios = await AxiosBase();
      const deviceName = 'S7';
      const loginPayload = {
        ...payload,
        device_name: deviceName,
      };
      console.log(loginPayload);
      
      const { data } = await Axios.post('/login', loginPayload);
      console.log('data',data);
      return data;
    } catch (err) {
      const error = err as ErrorPayload;
      if (!error.response) {
        return thunkAPI.rejectWithValue({ msg: "Network Error", status: 500 });
      }
      return thunkAPI.rejectWithValue({
        msg: error.response.data?.error || "An error occurred",
        status: error.response.status,
      });
    }
  }
);
