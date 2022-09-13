import React, { Fragment } from 'react';
import MovieCard from './MovieCard';

const NewMoviesSection = ({ data }) => {
  return (
    <Fragment>
      {/* <Grid container padding='0 50px' style={{ marginBottom: '16px' }}>
        <Typography variant='h4' color='white'>
          NEW MOVIES
        </Typography>
      </Grid> */}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: '0 50px',
        }}
      >
        {data.map((item) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '20%',
              margin: '0 10px',
            }}
          >
            <MovieCard {...item} decorCard />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default NewMoviesSection;
