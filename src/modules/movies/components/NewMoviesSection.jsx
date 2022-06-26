import React from 'react';
import MovieCard from '../components/MovieCard';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const NewMoviesSection = ({ data }) => {
  return (
    <>
      <Grid container padding='0 50px' style={{ marginBottom: '16px' }}>
        <Typography variant='h4' color='white'>
          NEW MOVIES
        </Typography>
      </Grid>

      <Grid container padding='0 50px'>
        {data.map((item) => (
          <Grid
            key={item}
            item
            md={2}
            sm={2}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'no-wrap',
              margin: 'auto',
            }}
          >
            <Link to='#'>
              <MovieCard decorCard />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default NewMoviesSection;
