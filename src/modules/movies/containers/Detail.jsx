import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { toast } from 'react-toastify';

import useDetail from '../services/useDetail';
import NoImage from 'assets/images/no-image-available-vector-hand-260nw-745639717.webp';
import Header from 'modules/home/containers/Header';
import Spinner from 'components/Spinner/index';
import { converContentMovieDetail } from 'utils/helpers';
import CommentSection from '../components/CommentSection';
import { Link } from 'react-router-dom';

const Detail = () => {
  const { movie, isMovie, comments, isAuthenticated } = useDetail();

  const handleNotifyToast = () => {
    toast.warning(
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h3 style={{ marginRight: '10px' }}>Please login first</h3>
        <Link to='/login'>
          <button
            style={{
              padding: '4px',
              color: 'white',
              background: '#f1c40e',
              border: 'none',
              outline: 'none',
            }}
          >
            Login
          </button>
        </Link>
      </div>
    );
  };

  useEffect(() => {
    if (!isAuthenticated) {
      handleNotifyToast();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container
        className='movie-container'
        style={{ marginTop: '80px', display: 'flex' }}
      >
        {!isMovie ? (
          <div className='detail'>
            <div className='left'>
              <div className='left__img'>
                <img src={movie?.poster || NoImage} alt='' />
              </div>
              <div className='left__content'>
                <h3>{movie?.title}</h3>
                <div>
                  <p>{movie?.fullplot || movie?.plot}</p>
                </div>
              </div>
            </div>
            <div className='right'>
              <ul>
                <li>
                  <h6>Rating :</h6>
                  <span>{movie?.imdb?.rating}</span>
                </li>
                <li>
                  <h6>Directors :</h6>
                  <span>{converContentMovieDetail(movie?.directors)}</span>
                </li>
                <li>
                  <h6>Cast :</h6>
                  <span>{converContentMovieDetail(movie?.cast)}</span>
                </li>
                <li>
                  <h6>Countries :</h6>
                  <span>{converContentMovieDetail(movie?.countries)}</span>
                </li>
                <li>
                  <h6>Genres :</h6>
                  <span>{converContentMovieDetail(movie?.genres)}</span>
                </li>
                <li>
                  <h6>Release :</h6>
                  <span>{movie?.year}</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </Container>
      <CommentSection data={comments} />
    </>
  );
};

export default Detail;
