import React from 'react';
import Brand1 from 'assets/images/brands/client-1.png';
import Brand2 from 'assets/images/brands/client-2.png';
import Brand3 from 'assets/images/brands/client-3.png';
import Brand4 from 'assets/images/brands/client-4.png';
import Brand5 from 'assets/images/brands/client-5.png';
import Brand6 from 'assets/images/brands/client-6.png';

const arr = [
  {
    id: 1,
    image: Brand1,
  },
  {
    id: 2,
    image: Brand2,
  },
  {
    id: 3,
    image: Brand3,
  },
  {
    id: 4,
    image: Brand4,
  },
  {
    id: 5,
    image: Brand5,
  },
  {
    id: 6,
    image: Brand6,
  },
];

function SectionBrands() {
  return (
    <div className='section-brand'>
      <div className='section-brand__wrapper'>
        {arr.map((item) => (
          <img key={item.id} src={item.image} alt='img' />
        ))}
      </div>
    </div>
  );
}

export default SectionBrands;
