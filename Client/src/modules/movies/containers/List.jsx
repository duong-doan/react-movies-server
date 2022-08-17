import React from 'react';
import SearchMovie from '../components/SearchMovie';
import Grid from '@mui/material/Grid';
import NewMoviesSection from '../components/NewMoviesSection';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListMovieRequest } from '../store/actions';

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMovieRequest());
  }, []);

  return (
    <Grid container>
      <SearchMovie />
      <NewMoviesSection data={[1, 2, 3, 4, 5]} />
    </Grid>
  );
};

export default List;
