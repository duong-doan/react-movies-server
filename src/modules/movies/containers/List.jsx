import React from 'react';
import SearchMovie from '../components/SearchMovie';
import Grid from '@mui/material/Grid';
import NewMoviesSection from '../components/NewMoviesSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListMovieRequest } from '../store/actions';
import { selectMoviesList } from '../store/selector';

const List = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector(selectMoviesList);

  useEffect(() => {
    dispatch(getListMovieRequest());
  }, []);

  return (
    <Grid container>
      <SearchMovie />
      <NewMoviesSection data={moviesList} />
    </Grid>
  );
};

export default List;
