import React from 'react';
import Image1 from 'assets/images/slider_top/h1-team-image-1.jpg';
import Image2 from 'assets/images/slider_top/h1-team-image-2.jpg';
import Image3 from 'assets/images/slider_top/h1-team-image-3.jpg';

function SectionCast() {
  return (
    <div className='session-cast'>
      <div className='session-cast__wrapper'>
        <div className='session-cast__wrapper__content'>
          <span className='content__title'>THE CAST</span>
          <h1>A HANDFULL OF CHARACTERS</h1>
          <div className='content__list'>
            <div className='content__item'>
              <div>
                <img src={Image1} alt='img' />
              </div>
              <span>Alex Pearson </span>
            </div>
            <div className='content__item'>
              <div>
                <img src={Image2} alt='img' />
              </div>
              <span>Lana Ray Vaugh </span>
            </div>
            <div className='content__item'>
              <div>
                <img src={Image3} alt='img' />
              </div>
              <span>Eva Rose </span>
            </div>
          </div>
        </div>
      </div>
      <div className='column-middle'></div>
    </div>
  );
}

export default SectionCast;
