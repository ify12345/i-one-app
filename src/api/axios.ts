import Axios from "axios";

async function AxiosBase() {
 
  return Axios.create({
    baseURL: 'https://www.isopportunities.com.au/api',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    timeout: 20000,
  });
}

export default AxiosBase;
