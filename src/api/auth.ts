/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  AsyncThunkConfig,
  ForgotPasswordPayload,
  GoogleAuthPayload,
  LoginPayload,
  RegisterPayload,
} from '@/types/api';
import {
  LoginResponse,
  RegisterResponse,
  RequestResponse,
} from '@/types/apiResponse';
import AxiosBase from './axios';
import apiRequest from './request';

export const getRoles = createAsyncThunk('auth/roles', async (_, thunkAPI) => {
  try {
    const Axios = await AxiosBase();
    const response = await Axios.get('/auth/user-types');
    return response.data; // Return the response data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message); // Handle the error
  }
});
// export const register = createAsyncThunk<RegisterResponse, RegisterPayload, AsyncThunkConfig>
// 		("auth/register",
// 				async (payload, thunkAPI) => {
// 						const Axios = await AxiosBase();
// 						return apiRequest(Axios.post('/auth/register', payload),
// 								thunkAPI, 'auth')
// 				}
// 		);
export const register = createAsyncThunk<RegisterResponse, RegisterPayload, AsyncThunkConfig>(
  'auth/register',
  async (payload, thunkAPI) => {
    try {
      const Axios = await AxiosBase();
      const response = await Axios.post('/auth/register', payload);
      return response.data;
    } catch (error) {
      // Handle the error here
      if (error.response) {
        // Server responded with a status other than 200 range
        return thunkAPI.rejectWithValue(error.response.data);
      } else if (error.request) {
        // Request was made but no response was received
        return thunkAPI.rejectWithValue({error: 'No response received'});
      } else {
        // Something else happened while setting up the request
        return thunkAPI.rejectWithValue({error: error.message});
      }
    }
  },
);

export const sendOtp = createAsyncThunk('auth/verify-account', async (payload, thunkAPI) => {
  try {
    const Axios = await AxiosBase();

    const response = await Axios.post('/auth/send-email-otp', null, {
      headers: {
        email: payload.email, // Include the email in the headers
        accept: 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    } else if (error.request) {
      return thunkAPI.rejectWithValue({error: 'No response received'});
    } else {
      return thunkAPI.rejectWithValue({error: error.message});
    }
  }
});

export const ResendPhoneOtp = createAsyncThunk('auth/resend-phone', async (payload, thunkAPI) => {
  try {
    const Axios = await AxiosBase();

    const response = await Axios.post('/auth/resend-phone-verification-otp', null, {
      headers: {
        phone: payload.phone, // Include the email in the headers
        accept: 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    } else if (error.request) {
      return thunkAPI.rejectWithValue({error: 'No response received'});
    } else {
      return thunkAPI.rejectWithValue({error: error.message});
    }
  }
});

export const ResendEmailOtp = createAsyncThunk('auth/resend-email', async (payload, thunkAPI) => {
  try {
    const Axios = await AxiosBase();

    const response = await Axios.post('/auth/resend-email-verification-otp', null, {
      headers: {
        email: payload.email, // Include the email in the headers
        accept: 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    } else if (error.request) {
      return thunkAPI.rejectWithValue({error: 'No response received'});
    } else {
      return thunkAPI.rejectWithValue({error: error.message});
    }
  }
});

export const sendPhoneOtp = createAsyncThunk(
  'auth/verify-account-phone',
  async (payload, thunkAPI) => {
    try {
      const Axios = await AxiosBase();

      const response = await Axios.post('/auth/send-phone-otp', null, {
        headers: {
          email: payload.phone,
          accept: 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else if (error.request) {
        return thunkAPI.rejectWithValue({error: 'No response received'});
      } else {
        return thunkAPI.rejectWithValue({error: error.message});
      }
    }
  },
);

export const EmailVerification = createAsyncThunk(
  'auth/verify-account',
  async (payload, thunkAPI) => {
    try {
      const Axios = await AxiosBase();

      // Make the POST request with email in the headers and verification code in the body
      const response = await Axios.post(
        '/auth/verify-email',
        {
          email_verification_code: payload.email_verification_code, // Include the verification code in the body
        },
        {
          headers: {
            email: payload.email, // Include the email in the headers
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data;
    } catch (error) {
      // Handle the error here
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else if (error.request) {
        return thunkAPI.rejectWithValue({error: 'No response received'});
      } else {
        return thunkAPI.rejectWithValue({error: error.message});
      }
    }
  },
);
export const ResetToken = createAsyncThunk('auth/reset-account', async (payload, thunkAPI) => {
  try {
    const Axios = await AxiosBase();

    // Make the POST request with email in the headers and verification code in the body
    const response = await Axios.post(
      '/auth/verify-reset-password-token',
      {
        reset_password_verification_code: payload.value,
      },
      {
        headers: {
          email: payload.email,
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    // Handle the error here
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    } else if (error.request) {
      return thunkAPI.rejectWithValue({error: 'No response received'});
    } else {
      return thunkAPI.rejectWithValue({error: error.message});
    }
  }
});

export const ResendPasswordReset = createAsyncThunk(
  'auth/resend-reset-password-account',
  async (payload, thunkAPI) => {
    try {
      const Axios = await AxiosBase();
      console.log({
        email: payload.email,
        accept: 'application/json',
      });

      // Corrected Axios.post call with headers in the correct position
      const response = await Axios.post(
        '/auth/resend-reset-password-token',
        {},
        {
          headers: {
            email: payload.email,
            accept: 'application/json',
          },
        },
      );

      return response.data;
    } catch (error) {
      // Handle the error here
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else if (error.request) {
        return thunkAPI.rejectWithValue({error: 'No response received'});
      } else {
        return thunkAPI.rejectWithValue({error: error.message});
      }
    }
  },
);

export const PhoneVerification = createAsyncThunk(
  'auth/verify-account',
  async (payload, thunkAPI) => {
    try {
      const Axios = await AxiosBase();

      // Make the POST request with email in the headers and verification code in the body
      const response = await Axios.post(
        '/auth/verify-phone',
        {
          phone_verification_code: payload.phone_verification_code, // Include the verification code in the body
        },
        {
          headers: {
            'phone-number': payload.phone_number, // Include the email in the headers
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data;
    } catch (error) {
      // Handle the error here
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else if (error.request) {
        return thunkAPI.rejectWithValue({error: 'No response received'});
      } else {
        return thunkAPI.rejectWithValue({error: error.message});
      }
    }
  },
);

export const registerProfile = createAsyncThunk(
  'auth/register-profile',
  async (payload, thunkAPI) => {
    try {
      const Axios = await AxiosBase();

      const response = await Axios.post('/auth/register-profile', payload);

      return response.data;
    } catch (error) {
      // Handle the error here
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      if (error.request) {
        return thunkAPI.rejectWithValue({error: 'No response received'});
      }
      return thunkAPI.rejectWithValue({error: error.message});
    }
  },
);

export const forgotPassword = createAsyncThunk<
  RequestResponse,
  ForgotPasswordPayload,
  AsyncThunkConfig
>('auth/forgot-password', async (payload, thunkAPI) => {
  try {
    const Axios = await AxiosBase();
    const response = await Axios.post('/auth/forget-password', payload);
    return response.data;
  } catch (error) {
    // Handle the error here
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    } else if (error.request) {
      return thunkAPI.rejectWithValue({error: 'No response received'});
    } else {
      return thunkAPI.rejectWithValue({error: error.message});
    }
  }
});

export const resetPassword = createAsyncThunk('auth/reset-password', async (payload, thunkAPI) => {
  try {
    const Axios = await AxiosBase();

    // Make the POST request with email in the headers and verification code in the body
    const response = await Axios.post(
      '/auth/reset-password',
      {
        new_password: payload.password, // Include the verification code in the body
      },
      {
        headers: {
          email: payload.email, // Include the email in the headers
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    // Handle the error here
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    } else if (error.request) {
      return thunkAPI.rejectWithValue({error: 'No response received'});
    } else {
      return thunkAPI.rejectWithValue({error: error.message});
    }
  }
});

export const logOut = createAsyncThunk<RequestResponse, void, AsyncThunkConfig>(
  'auth/logout',
  async (_, thunkAPI) => {
    const Axios = await AxiosBase();
    return apiRequest(Axios.post('/v1/auth/logout'), thunkAPI);
  },
);

export const login = createAsyncThunk<LoginResponse, LoginPayload, AsyncThunkConfig>(
  'auth/login',
  async (payload, thunkAPI) => {
    try {
      const Axios = await AxiosBase();
      const response = await Axios.post('/auth/login', payload);
      return response.data;
    } catch (error) {
      // Handle the error here
      if (error.response) {
        // Server responded with a status other than 200 range
        return thunkAPI.rejectWithValue(error.response.data);
      }
      if (error.request) {
        // Request was made but no response was received
        return thunkAPI.rejectWithValue({error: 'No response received'});
      }
      // Something else happened while setting up the request
      return thunkAPI.rejectWithValue({error: error.message});
    }
  },
);

export const continueWithGoogle = createAsyncThunk<
  LoginResponse,
  GoogleAuthPayload,
  AsyncThunkConfig
>('auth/google/login', async (payload, thunkAPI) => {
  const Axios = await AxiosBase();
  return apiRequest(Axios.post('/v1/auth/google/login', payload), thunkAPI, 'auth');
});

export const googleSignup = createAsyncThunk<LoginResponse, GoogleAuthPayload, AsyncThunkConfig>(
  'auth/google/signup',
  async (payload, thunkAPI) => {
    const Axios = await AxiosBase();
    return apiRequest(Axios.post('/v1/auth/google/signup', payload), thunkAPI, 'auth');
  },
);
