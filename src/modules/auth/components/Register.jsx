import React from 'react';
import { Typography } from '@mui/material';
import FormGroup from 'components/FormGroup';
import BaseButton from 'components/BaseButton';
import { NavLink } from 'react-router-dom';
import { AUTH_ROUTES } from '../store/constant';
import TextLineThrough from 'components/TextLineThrough';
import useRegister from '../services/useRegister';

const Register = () => {
  const { loading, formik } = useRegister();

  return (
    <div className='login'>
      <div className='login__logo'>
        <h2>DOAN MOVIE</h2>
      </div>
      <div className='login__body' style={{ height: '50%' }}>
        <form onSubmit={formik.handleSubmit} className='form-signin'>
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
            onChange={formik.handleChange}
            error={
              formik.errors.email && formik.touched.email
                ? formik.errors.email
                : ''
            }
          />
          <FormGroup
            id='password'
            name='password'
            label='Password'
            type='password'
            onChange={formik.handleChange}
            error={
              formik.errors.password && formik.touched.password
                ? formik.errors.password
                : ''
            }
          />
          <FormGroup
            id='confirmPassword'
            name='confirmPassword'
            label='Confirm password'
            type='password'
            onChange={formik.handleChange}
            error={
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : ''
            }
          />

          <BaseButton
            width='50%'
            height='50px'
            color='primary'
            custom={{
              marginTop: '20px',
            }}
            type='submit'
            loading={loading}
          >
            SIGN UP
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
