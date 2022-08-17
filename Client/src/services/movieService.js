import axios from 'api/axiosClient';
import { MOVIES_API } from 'modules/movies/store/constants';

export const getListMovieRequestApi = async () => {
  try {
    const res = await axios.get(MOVIES_API.GET_LIST);
    console.log('axios client', res);
    return res;
  } catch (error) {
    return error;
  }
};
