import TextLineThrough from 'components/TextLineThrough/index';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { selectIsAuthenticated, selectUser } from 'modules/auth/store/selector';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from 'modules/auth/store/actions';
import {
  Avatar,
  Box,
  Typography,
} from '../../../../node_modules/@mui/material/index';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [open, setOpen] = useState(false);

  const handleClickExpand = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClickLogout = () => {
    dispatch(logoutRequest());
  };

  return (
    <div className='header'>
      <div className='header__logo'>
        <h2>D</h2>
      </div>
      <div className='header__menu'>
        <ul>
          <li>
            <Link to='/' style={{ color: 'white' }}>
              <TextLineThrough color='white'>HOME</TextLineThrough>
            </Link>
          </li>
          {/* <li>
            <TextLineThrough color='white'>PAGES</TextLineThrough>
          </li>
          <li>
            <TextLineThrough color='white'>PORTFOLIO</TextLineThrough>
          </li>
          <li>
            <TextLineThrough color='white'>BLOG</TextLineThrough>
          </li> */}
          <li>
            <Link to='/movies' style={{ color: 'white' }}>
              <TextLineThrough color='white'>MOVIES</TextLineThrough>
            </Link>
          </li>
        </ul>
      </div>
      <div className='header__others' onClick={handleClickExpand}>
        <div></div>
        <div></div>
      </div>

      <div className={`header__expand ${open ? 'open' : ''}`}>
        <CloseIcon onClick={handleClickClose} />
        {isAuthenticated ? (
          <Box className='user-profile' sx={{}}>
            <Box sx={{ marginBottom: '80px' }}>
              <h6 style={{ cursor: 'pointer' }}>Welcome</h6>
              <h4>{user.email}</h4>
            </Box>

            <Box>
              <h6>Contact</h6>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px',
                    padding: '8px',
                    borderRadius: '8px',
                    '&:hover': {
                      cursor: 'pointer',
                      background: '#333',
                    },
                  }}
                >
                  <Avatar sx={{ marginRight: '20px' }} />
                  <Box
                    sx={{ color: 'white', fontSize: '18px' }}
                    textOverflow='ellipsis'
                    overflow='hidden'
                  >
                    abcalskdabcalskdabcalskdabcalskdabcalskdabcalskd
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <div className='introduce'>
            <h4>DOAN MOVIE</h4>
            <h6>A MODERN THEME FOR THE FILM INDUSTRY & VIDEO PRODUCTION</h6>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
