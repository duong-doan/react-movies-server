import React from 'react';
import { Container } from '@mui/material';
import Avatar from 'assets/images/avatar.jpeg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postCommentRequest } from '../store/actions';
import { selectUser } from 'modules/auth/store/selector';
import { useParams } from 'react-router-dom';

const CommentSection = ({ data }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [comment, setComment] = useState('');
  const { id } = useParams();

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: user.email.split('@')[0],
      email: user.email,
      movie_id: id,
      text: comment,
      date: `${new Date()}`,
    };
    dispatch(postCommentRequest({ data }));
    setComment('');
  };

  return (
    <Container className='comment-container'>
      <h1>Comments</h1>
      <div className='comment__quantity'>
        <p>{data.length} comments</p>
      </div>
      <div className='comment__zone'>
        <form onSubmit={handleSubmit}>
          <input
            value={comment}
            onChange={handleChange}
            type='text'
            placeholder='Enter your comment...'
          />
          <button type='submit'>comment</button>
        </form>
      </div>
      <div className='comment__list'>
        <ul>
          {data.length ? (
            data.map((item) => (
              <li key={item._id}>
                <div className='avatar'>
                  <img src={Avatar} alt='avatar' />
                </div>
                <div>
                  <h6>{item.email}</h6>
                  <p>{item.text}</p>
                </div>
              </li>
            ))
          ) : (
            <p className='no-data'>Your comment first</p>
          )}
        </ul>
      </div>
    </Container>
  );
};

export default CommentSection;
