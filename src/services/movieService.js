import axios from 'api/axiosClient';
import { MOVIES_API } from 'modules/movies/store/constants';

export const getListMovieRequestApi = async (data) => {
  const { accessToken: token, page } = data;
  try {
    const res = await axios.post(
      MOVIES_API.GET_LIST,
      { page },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const getMovieInfoRequestApi = async (id) => {
  try {
    const res = await axios.post(MOVIES_API.GET_MOVIE_INFO, { id });
    return res;
  } catch (error) {
    return error;
  }
};

export const getCommentsInMovieApi = async (movie_id) => {
  try {
    const res = await axios.post(MOVIES_API.GET_COMMENTS_MOVIE, { movie_id });
    return res;
  } catch (error) {
    return error;
  }
};

export const postCommentInMovieApi = async ({ data, token }) => {
  try {
    const res = await axios.post(MOVIES_API.POST_COMMENT, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const searchMoviesApi = async (searchValue) => {
  try {
    const res = await axios.post(MOVIES_API.SEARCH_MOVIE, { searchValue });
    return res;
  } catch (error) {
    return error;
  }
};
