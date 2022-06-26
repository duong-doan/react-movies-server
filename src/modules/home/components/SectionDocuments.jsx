import React from 'react';
import Image1 from 'assets/images/slider_top/h1-blog-image-1.jpeg';
import Image2 from 'assets/images/slider_top/h1-blog-image-2.jpeg';
import Image3 from 'assets/images/slider_top/h1-blog-image-3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const arr = [
  {
    id: 1,
    title: 'Revisiting the sets – No. 36 – the museo ',
    image: Image1,
  },
  {
    id: 2,
    title: 'Eerie soundtracks by the l. einadui	',
    image: Image2,
  },
  {
    id: 2,
    title: 'Teaming up with josh marston for effects	',
    image: Image3,
  },
];

function SectionDocuments() {
  return (
    <div className='section-documents'>
      {arr.map((item) => (
        <div className='document' key={item.id}>
          <div className='document__img'>
            <img src={item.image} alt='' />
          </div>
          <div className='document__content'>
            <h1>{item.title}</h1>
            <span>27/03/2020 Camera by Kim Cooke</span>
            <div className='document__share'>
              <div>
                <span></span>
                <p>READ MORE</p>
              </div>
              <div>
                <FontAwesomeIcon size='xl' icon='fa-solid fa-share-nodes' />
                <p>share</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionDocuments;
