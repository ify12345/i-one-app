import axios from "axios";
import * as SecureStore from 'expo-secure-store';

async function AxiosBase() {
  try {
    const token = await SecureStore.getItemAsync('market-assist-token');

    const axiosInstance = axios.create({
      baseURL: 'https://market-assist-api-7bd4d4ba8f21.herokuapp.com/api',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
      timeout: 20000, 
    });

    return axiosInstance;
  } catch (error) {
    console.error('Error creating Axios instance:', error);
    throw error; 
  }
}

export default AxiosBase;
