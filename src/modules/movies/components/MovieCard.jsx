import * as React from 'react';
import image from 'assets/images/slider_top/h1-blog-image-2.jpeg';

export default function MovieCard({ decorCard = false }) {
  const bgColorDecor = [
    '#DFBB9D',
    '#F7E2D6',
    '#9DD6DF',
    '#A084CF',
    '#18978F',
    '#4C3A51',
    '#774360',
    '#B25068',
    '#E7AB79',
    '#FF7396',
    '#F4E06D',
    '#FFFFDE',
    '#C499BA',
    '#9EB23B',
    '#C7D36F',
    '#FCF9C6',
    '#E0DECA',
  ];

  return (
    <div className='movie-card' style={{ width: '100%' }}>
      <div className='movie-card__img'>
        <img src={image} alt='img' />
        <div
          className='bg-img'
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        {decorCard && (
          <div
            className='decor-img'
            style={{ background: bgColorDecor[Math.floor(Math.random() * 17)] }}
          ></div>
        )}
      </div>
      <div className='movie-card__content'>
        <h6>fast and furious 9</h6>
        <span>sub fast and furious 9 (2020)</span>
      </div>
    </div>
  );
}
