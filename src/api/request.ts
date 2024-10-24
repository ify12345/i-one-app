import { AxiosResponse } from 'axios';
import * as Keychain from 'react-native-keychain';
import { RejectValue } from '~types/api';

interface ErrorPayload {
  response: {
    data: {
      errors: string
    },
    status: number
  }
}

type RejectedWithValue = {
  rejectWithValue(rejectValue: RejectValue): { payload: RejectValue }
};

async function apiRequest(asyncFn: Promise<AxiosResponse>, thunkAPI: RejectedWithValue, route?: string) {
  try {
    const { data } = await asyncFn;

    if (route === "auth") {
      const { data: { token } } = data;
      if (token) {
        const key = 'market-assist';
        await Keychain.setGenericPassword(key, token);
      }
    }

    return data;
  } catch (err) {
    const error = err as ErrorPayload;

    if (!error?.response) {
      return thunkAPI.rejectWithValue({ msg: "Network Error", status: 500 });
    }

    if (error?.response?.status === 500) {
      return thunkAPI.rejectWithValue({ msg: "Server Error: " + error?.response?.data?.errors, status: 500 });
    }

    if (error?.response.status === 401) {
      // TODO: Implement logout or other handling here
      // store.dispatch(logout());
    }

    return thunkAPI.rejectWithValue({
      msg: error?.response?.data?.errors,
      status: error?.response?.status,
    });
  }
};

export default apiRequest;
