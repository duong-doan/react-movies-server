import axios from 'axios';
import { setToken } from 'utils/hooks/useToken';

export const loginUserRequest = async (payload) => {
  try {
    console.log('axios', axios);
    console.log(`${process.env.REACT_APP_BASE_URL}/login`);
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/login`,
      payload
    );
    if (res) {
      const accessToken = res.data.accessToken;
      console.log('accessToken login request', accessToken);
      setToken(accessToken);
    }
  } catch (error) {
    console.log('login error', error);
  }
};

export const registerUserRequest = async (payload) => {
  try {
    const res = await axios.post('/register', payload);
    console.log(res);
    console.log('Register success!!');
  } catch (error) {
    console.log('register error', error);
  }
};
