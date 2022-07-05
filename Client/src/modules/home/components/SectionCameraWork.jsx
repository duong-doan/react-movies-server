import CustomizedButtons from 'components/BaseButton/index';
import React from 'react';
import Image from 'assets/images/slider_top/93761785_882467185534538_8390250542312319543_n.jpg';

function SectionCameraWork() {
  return (
    <div className='section-camera'>
      <div className='section-camera__body'>
        <div className='section-camera__body__left'>
          <span>CAMERAWORK</span>
          <h1>
            “extraordinary <b>lights</b> A DANCE OF CHIARO-SCURO
          </h1>
          <CustomizedButtons width='150px'>LEARN MORE</CustomizedButtons>
        </div>
        <div className='section-camera__body__right'>
          <img src={Image} alt='' />
        </div>
      </div>
    </div>
  );
}

export default SectionCameraWork;
