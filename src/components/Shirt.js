import React from "react";
import tshirtALarge from "../assets/TshirtA_Large.png";
import tshirtASmall from "../assets/TshirtA_Small.png";
import tshirtBLarge from "../assets/TshirtB_Large.png";
import tshirtBSmall from "../assets/TshirtB_Small.png";
import ModalImage from "react-modal-image";
import SectionHeading from "./SectionHeading";

import "./fonts.css";

const TShirtA = () => {
  return (
    <>
      <ModalImage
        small={tshirtASmall}
        large={tshirtALarge}
        alt="T-Shirt Design A"
        enableRotate="false"
        hideDownload="true"
        hideZoom="true"
      />
    </>
  );
};

const TShirtB = () => {
  return (
    <>
      <ModalImage
        small={tshirtBSmall}
        large={tshirtBLarge}
        alt="T-Shirt Design B"
        enableRotate="false"
        hideDownload="true"
        hideZoom="true"
      />
    </>
  );
};

function Shirt() {
  return (
    <>
      <div className="container">
        <SectionHeading
          headerText="T-Shirts"
          subheadText="Available for purchase at the Memorial Student Center!"
          hrid="tshirt"
        />
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <div className="card-img-top">
                <TShirtA />
              </div>
              <div className="card-body">
                <p className="card-text text-center nunito">
                  Design A | <b>$10</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <div className="card-img-top">
                <TShirtB />
              </div>
              <div className="card-body">
                <p className="card-text text-center nunito">
                  Design B | <b>$11</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shirt;
