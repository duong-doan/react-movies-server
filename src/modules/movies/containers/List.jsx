import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import NewMoviesSection from '../components/NewMoviesSection';
import { getListMovieRequest } from '../store/actions';
import { selectLoading, selectMoviesList } from '../store/selector';
import Header from 'modules/home/containers/Header';
import { clearDataMovies } from '../store/slice';

const List = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector(selectMoviesList);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getListMovieRequest());

    return () => {
      dispatch(clearDataMovies());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container>
      <Header />
      {/* <SearchMovie /> */}
      <div
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)',
          position: 'relative',
          marginTop: '60px',
        }}
      >
        {loading ? (
          <CircularProgress
            size={60}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 5,
            }}
          />
        ) : (
          <NewMoviesSection data={moviesList} />
        )}
      </div>
    </Grid>
  );
};

export default List;
