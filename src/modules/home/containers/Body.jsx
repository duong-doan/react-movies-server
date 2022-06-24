import React from 'react';

import SectionSliderTop from '../components/SectionSliderTop';
import SectionTaleOf from '../components/SectionTaleOf';
import SectionSliderBottom from '../components/SectionSliderBottom';
import SectionCast from '../components/SectionCast';
import SectionComment from '../components/SectionComment';
import SectionCameraWork from '../components/SectionCameraWork';
import SectionDocuments from '../components/SectionDocuments';
import SectionHistory from '../components/SectionHistory';
import SectionBrands from '../components/SectionBrands';
import Header from './Header';

const Homepage = () => {
  return (
    <div className='home-page'>
      <Header />
      <SectionSliderTop />
      <SectionTaleOf />
      <SectionSliderBottom />
      <SectionCast />
      <SectionComment>
        <SectionCameraWork />
      </SectionComment>
      {/* <SectionDocuments />
      <SectionHistory />
      <SectionBrands /> */}
    </div>
  );
};

export default Homepage;
