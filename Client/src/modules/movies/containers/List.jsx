import React from 'react';
import SearchMovie from '../components/SearchMovie';
import Grid from '@mui/material/Grid';
import NewMoviesSection from '../components/NewMoviesSection';

const List = () => {
  return (
    <Grid container>
      <SearchMovie />
      <NewMoviesSection data={[1, 2, 3, 4, 5]} />
    </Grid>
  );
};

export default List;
