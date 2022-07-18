import TextLineThrough from 'components/TextLineThrough/index';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { selectIsAuthenticated, selectUser } from 'modules/auth/store/selector';
import { useSelector } from 'react-redux';
import { AUTH_ROUTES } from 'modules/auth/store/constant';

function Header() {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [open, setOpen] = useState(false);

  const handleClickExpand = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div className='header'>
      <div className='header__logo'>
        <h2>D</h2>
      </div>
      <div className='header__menu'>
        <ul>
          <li>
            <TextLineThrough color='white'>HOME</TextLineThrough>
          </li>
          <li>
            <TextLineThrough color='white'>PAGES</TextLineThrough>
          </li>
          <li>
            <TextLineThrough color='white'>PORTFOLIO</TextLineThrough>
          </li>
          <li>
            <TextLineThrough color='white'>BLOG</TextLineThrough>
          </li>
          <li>
            <Link to='/movies'>
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
          <div className='user-profile'>
            <h4>{user.email}</h4>
            <Link to={AUTH_ROUTES.LOGIN} style={{ color: '#4545d5' }}>
              <h6>Logout</h6>
            </Link>
          </div>
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
