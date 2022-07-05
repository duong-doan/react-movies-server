import React from "react";
import CustomizedButtons from "components/BaseButton/index";
import Image1 from "assets/images/slider_top/h1-slider-inner-2.jpg";
import Image2 from "assets/images/slider_top/h1-slider-inner-1.jpg";
import Image3 from "assets/images/slider_top/h1-slider-inner-3.jpg";

const SectionTaleOf = () => {
  return (
    <div className="section-tale">
      <div className="section-tale__body">
        <div className="column-middle"></div>
        <div className="section-tale__body__left">
          <div className="wrapper__img">
            <img className="img-1" src={Image1} alt="img" />
            <img className="img-2" src={Image2} alt="img" />
            <img className="img-3" src={Image3} alt="img" />
          </div>
        </div>
        <div className="section-tale__body__right">
          <span>A TALE OF</span>
          <h1>
            LOVE AND LOATHING, A <b>BEAUTIFUL</b> TO DESTRUCTION
          </h1>
          <CustomizedButtons width="150px">LEARN MORE</CustomizedButtons>
        </div>
      </div>
    </div>
  );
};

export default SectionTaleOf;
