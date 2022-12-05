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

    return () => {
      dispatch(clearDataMovies());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Grid container>
      <Header />
      <SearchMovie onChange={handleDebounceSearch} />

      <InfiniteScroll
        dataLength={ids.length} //This is important field to render the next data
        next={handleNextPage}
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

      {/* <div
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)',
          position: 'relative',
          marginTop: '60px',
        }}
      >
        <button onClick={() => setPage((prev) => prev + 1)}>+</button>
        {}
      </div> */}
    </Grid>
  );
};

export default List;
