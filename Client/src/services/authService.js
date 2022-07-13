import axios from 'api/axiosClient';
import { setToken } from 'utils/hooks/useToken';

export const loginUserRequest = async (payload) => {
  try {
    const res = await axios.post('/login', payload);
    if (res) {
      const accessToken = res.data.accessToken;
      setToken(accessToken);
    }
  } catch (error) {
    console.log('login error', error);
  }
};

export const registerUserRequest = async (payload) => {
  try {
    await axios.post('/register', payload);
  } catch (error) {
    console.log('register error', error);
  }
};
