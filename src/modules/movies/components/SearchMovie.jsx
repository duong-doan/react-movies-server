import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid, Box } from '@mui/material';
import useDebounce from 'utils/hooks/useDebounce';
import Spinner from 'components/Spinner/index';
import { useSelector } from 'react-redux';
import { selectMoviesSearch } from '../store/selector';
import { useNavigate } from 'react-router-dom';

const SearchMovie = ({ onChange }) => {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [selectValue, setSelectValue] = useState();
  const [options, setOptions] = useState([]);
  const debounceSearch = useDebounce(search, 500);
  const moviesSearch = useSelector(selectMoviesSearch);
  const navigate = useNavigate();

  const handleChange = (_, newValueSearch) => {
    setSearch(newValueSearch);
  };

  useEffect(() => {
    if (debounceSearch && !moviesSearch.length) {
      console.log('lot do');
      setLoading(true);
    }
  }, [debounceSearch, moviesSearch]);

  useEffect(() => {
    if (moviesSearch.length) {
      setLoading(false);
      setOptions(() => {
        return moviesSearch.map((item) => ({
          id: item._id,
          label: item.title,
        }));
      });
    }
  }, [moviesSearch]);

  useEffect(() => {
    if (!debounceSearch) {
      setLoading(false);
      setOptions([]);
    }
    onChange(debounceSearch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch]);

  const handleChangeValue = (_, newValue) => {
    setSelectValue(newValue.id);
    navigate(`/movies/${newValue.id}`);
  };

  return (
    <Grid container marginTop='70px'>
      <Grid item sm={10} md={8} margin='auto'>
        <Autocomplete
          freeSolo
          options={options}
          sx={{ width: '100%' }}
          renderInput={(params) => (
            <Autocomplete
              id='free-solo-demo'
              freeSolo
              value={selectValue}
              onChange={handleChangeValue}
              inputValue={search}
              onInputChange={handleChange}
              options={options.map((option) => option)}
              renderInput={(params) => (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <TextField {...params} color='primary' label='Movie' />
                  {loading && (
                    <Spinner
                      customStyle={{
                        width: '20px',
                        height: '20px',
                        right: '10px',
                        left: 'unset',
                        top: 'unset',
                        transform: 'translateX(-50%)',
                      }}
                    />
                  )}
                </Box>
              )}
            />
          )}
          renderOption={(props, option) => <li {...props}>{option.label}</li>}
          style={{ margin: 'auto', color: 'white' }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchMovie;
