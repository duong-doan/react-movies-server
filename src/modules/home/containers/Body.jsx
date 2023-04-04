import React from 'react';

import SectionSliderTop from '../components/SectionSliderTop';
import SectionTaleOf from '../components/SectionTaleOf';
import SectionSliderBottom from '../components/SectionSliderBottom';
import SectionCast from '../components/SectionCast';
import SectionComment from '../components/SectionComment';
import SectionCameraWork from '../components/SectionCameraWork';
import SectionDocuments from '../components/SectionDocuments';
import SectionBrands from '../components/SectionBrands';
import Header from './Header';
import Footer from './Footer';
import Chatbox from 'modules/chatting/components/Chatbox/index';

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
        <SectionDocuments />
      </SectionComment>
      <SectionBrands />
      <Footer />
      <Chatbox />
    </div>
  );
};

export default Homepage;
