import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid } from '@mui/material';

const SearchMovie = () => {
  return (
    <Grid container margin='20px 0'>
      <Grid item sm={10} md={8} margin='auto'>
        <Autocomplete
          autoComplete
          disablePortal
          options={[]}
          sx={{ width: '100%' }}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                className: 'abc',
              }}
              color='primary'
              label='Movie'
            />
          )}
          style={{ margin: 'auto', color: 'white' }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchMovie;
