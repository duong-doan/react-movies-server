import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid, Box } from '@mui/material';
import useDebounce from 'utils/hooks/useDebounce';
import Spinner from 'components/Spinner/index';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadingSearch, selectMoviesSearch } from '../store/selector';
import { useNavigate } from 'react-router-dom';
import { updateLoadingSearch } from '../store/slice';

const SearchMovie = ({ onChange }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [selectValue, setSelectValue] = useState(null);
  const [options, setOptions] = useState([]);
  const debounceSearch = useDebounce(search, 500);
  const loading = useSelector(selectLoadingSearch);
  const moviesSearch = useSelector(selectMoviesSearch);
  const navigate = useNavigate();
  console.log('loading', loading);

  const handleChange = (_, newValueSearch) => {
    setSearch(newValueSearch);
  };

  useEffect(() => {
    if (debounceSearch && !moviesSearch.length) {
      dispatch(updateLoadingSearch(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch, moviesSearch]);

  useEffect(() => {
    if (moviesSearch.length) {
      dispatch(updateLoadingSearch(false));
      setOptions(() => {
        return moviesSearch.map((item) => ({
          id: item._id,
          label: item.title,
        }));
      });
      return;
    }
    dispatch(updateLoadingSearch(false));
    setOptions([
      {
        id: 'none',
        label: 'No movies',
      },
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesSearch]);

  useEffect(() => {
    if (!debounceSearch) {
      dispatch(updateLoadingSearch(false));
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
      </Grid>
    </Grid>
  );
};

export default SearchMovie;
