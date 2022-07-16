import axios from 'api/axiosClient';

export const loginUserRequest = async (payload) => {
  try {
    const res = await axios.post('/login', payload);
    return res;
  } catch (error) {
    console.log('api login error', error);
  }
};

export const registerUserRequest = async (payload) => {
  try {
    const res = await axios.post('/register', payload);
    console.log('api register', res);
    return res;
  } catch (error) {
    console.log('api register error', error);
  }
};
