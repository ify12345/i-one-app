import { AxiosResponse } from 'axios';
import { RejectValue } from '@/src/types/api';

interface ErrorPayload {
  response: {
    data: {
      errors: string;
    };
    status: number;
  };
}
type RejectedWithValue = {
  rejectWithValue(rejectValue: RejectValue): { payload: RejectValue };
};

async function apiRequest(asyncFn: Promise<AxiosResponse>, thunkAPI: RejectedWithValue, route?: string) {
  try {
    const { data } = await asyncFn;

    // Token handling logic can go here if needed
    if (route === "auth") {
      const token = data?.data?.token;
      console.log("Token fetched:", token);
      // Optionally, you could store the token in AsyncStorage if needed
    }

    return data;
  } catch (err) {
    const error = err as ErrorPayload;

    if (!error?.response) {
      return thunkAPI.rejectWithValue({ msg: "Network Error", status: 500 });
    }
    if (error?.response?.status === 500) {
      return thunkAPI.rejectWithValue({ msg: "Server Error", status: 500 });
    }
    if (error?.response?.status === 401) {
      // Optionally handle logout logic if needed
    }

    return thunkAPI.rejectWithValue({
      msg: error?.response?.data?.errors,
      status: error?.response?.status,
    });
  }
}

export default apiRequest;