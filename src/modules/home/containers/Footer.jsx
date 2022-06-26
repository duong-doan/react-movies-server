import React from 'react';
import TextLineThrough from 'components/TextLineThrough';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer__logo'>
          <h2>DOAN MOVIE</h2>
        </div>
        <div className='footer__menu'>
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
              <TextLineThrough color='white'>MOVIES</TextLineThrough>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__present'>
        <span>© 2020 Qode Interactive, All Rights Reserved</span>
      </div>
    </>
  );
};

export default Footer;
