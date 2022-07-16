import React from 'react';
import { Typography } from '@mui/material';
import FormGroup from 'components/FormGroup';
import BaseButton from 'components/BaseButton';
import { NavLink } from 'react-router-dom';
import { AUTH_ROUTES } from '../store/constant';
import TextLineThrough from 'components/TextLineThrough';
import useRegister from '../services/useRegister';

const Register = () => {
  const { loading, handleChange, handleSubmit } = useRegister();

  const handleClick = () => {};

  return (
    <div className='login'>
      <div className='login__logo'>
        <h2>DOAN MOVIE</h2>
      </div>
      <div className='login__body' style={{ height: '60%' }}>
        <form onSubmit={handleSubmit} className='form-signin'>
          <Typography
            variant='h3'
            fontWeight='bold'
            textAlign='center'
            marginBottom='20px'
            color='white'
            style={{
              textDecoration: 'line-through',
            }}
          >
            REGISTER
          </Typography>
          <FormGroup
            id='email'
            name='email'
            label='Email'
            type='text'
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <FormGroup
            id='password'
            name='password'
            label='Password'
            type='password'
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <FormGroup
            id='confirmPassword'
            name='confirmPassword'
            label='Confirm password'
            type='password'
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />

          <BaseButton
            width='50%'
            height='50px'
            color='primary'
            onClick={handleClick}
            custom={{
              marginTop: '20px',
            }}
            type='submit'
            loading={loading}
          >
            SIGN IN
          </BaseButton>
        </form>
        <Typography variant='h6' color='primary'>
          Back to login.
          <NavLink to={AUTH_ROUTES.LOGIN}>
            <TextLineThrough
              custom={{ display: 'inline-block', marginLeft: '5px' }}
              color='white'
            >
              LOGIN
            </TextLineThrough>
          </NavLink>
        </Typography>
      </div>
    </div>
  );
};

export default Register;
