import React from "react";
import "./EventCard.css";
import delta from "../assets/cursor-fill.svg";
import './Medallion.css';


function MedallionCard(props) {
  //const [ setImagePath, setGroupsButtonLink, setCardDescription, setCardTitle, setGroupsButtonText ] = props;

  const { CardTitle, Clue } = props;

  return (
    <div className="card additionalCardProps">
      <div className="d-flex justify-content-center">
        <img alt="delta icon" src={delta} className="delta" />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="clueTitle card-title text-center hoboFont">{CardTitle}</h5>
        <p className="clueStyle text-center nunito-el">{Clue}</p>
        </div>
      </div>
    
  );
}

export default MedallionCard;
