import React from 'react';
import { Typography } from '@mui/material';
import FormGroup from 'components/FormGroup';
import BaseButton from 'components/BaseButton';
import { NavLink } from 'react-router-dom';
import { AUTH_ROUTES } from '../store/constant';
import TextLineThrough from 'components/TextLineThrough';

const Register = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <h2>DOAN MOVIE</h2>
      </div>
      <div className='login__body' style={{ height: '60%' }}>
        <div className='form-signin'>
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
          <FormGroup id='email' label='Email' type='text' />
          <FormGroup id='password' label='Password' type='password' />
          <FormGroup
            id='confirm-password'
            label='Confirm password'
            type='password'
          />

          <BaseButton
            width='50%'
            height='50px'
            color='primary'
            onClick={handleClick}
            custom={{
              marginTop: '20px',
            }}
          >SIGN IN</BaseButton>
        </div>
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
