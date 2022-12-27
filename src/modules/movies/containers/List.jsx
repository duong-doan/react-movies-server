import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getListMovieRequest, searchMovieRequest } from '../store/actions';
import { selectIds, selectLoading } from '../store/selector';
import Header from 'modules/home/containers/Header';
import { clearDataMovies } from '../store/slice';
import SearchMovie from '../components/SearchMovie';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from '../components/MovieCard';
import BaseButton from 'components/BaseButton/index';
import Spinner from 'components/Spinner/index';

const List = () => {
  const dispatch = useDispatch();
  const ids = useSelector(selectIds);
  const loading = useSelector(selectLoading);
  const [page, setPage] = useState(0);

  const handleDebounceSearch = (value) => {
    dispatch(searchMovieRequest(value));
  };

  useEffect(() => {
    dispatch(getListMovieRequest(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    return () => {
      dispatch(clearDataMovies());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Grid container>
      <Header />
      <SearchMovie onChange={handleDebounceSearch} />

      <InfiniteScroll
        dataLength={ids.length}
        hasMore={true}
        loader={
          loading && (
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
          )
        }
      >
        {ids.map((id) => (
          <MovieCard key={id} idItem={id} />
        ))}
      </InfiniteScroll>

      {ids.length && (
        <BaseButton
          onClick={handleClickLoadMore}
          custom={{ margin: 'auto', height: '37px' }}
        >
          {loading ? (
            <Spinner
              customStyle={{
                width: '20px',
                height: '20px',
                left: 'unset',
                top: 'unset',
                transform: 'translateX(-50%)',
              }}
            />
          ) : (
            'More'
          )}
        </BaseButton>
      )}
    </Grid>
  );
};

export default List;
