import React from "react";
import './fonts.css'
import './SectionHeading.css'


function SectionHeading(props) {
    
    const { headerText, subheadText, hrid } = props;

    return (
    <>
      <div className="subHeading hoboFont text-center">
        {headerText}
      </div>
      <hr id={hrid}/>
      <div className="verbiage nunito text-center">
        {subheadText}
      </div>
    </>
  );
}

export default SectionHeading;
