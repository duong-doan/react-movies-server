import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import { getCommentRequest, getMovieInfoRequest } from '../store/actions';
import { selectCommentInMovie, selectMovieInfo } from '../store/selector';
import { clearMovieInfo } from '../store/slice';
import { selectIsAuthenticated } from 'modules/auth/store/selector';

const useDetail = () => {
  const dispatch = useDispatch();
  const movie = useSelector(selectMovieInfo);
  const comments = useSelector(selectCommentInMovie);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { id } = useParams();
  const isMovie = isEmpty(movie);

  useEffect(() => {
    dispatch(getMovieInfoRequest(id));
    dispatch(getCommentRequest(id));

    return () => {
      dispatch(clearMovieInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { movie, comments, isMovie, isAuthenticated };
};

export default useDetail;
