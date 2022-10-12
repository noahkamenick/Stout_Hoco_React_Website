import React from "react";
import "./EventCard.css";
import cal from "../assets/calendar-week.svg";

function EventCard(props) {
  //const [ setImagePath, setGroupsButtonLink, setCardDescription, setCardTitle, setGroupsButtonText ] = props;

  const { CardTitle, CardDate, EventURL } = props;

  return (
    <div className="card additionalCardProps">
      <div className="d-flex justify-content-center">
        <img alt="calendar icon" src={cal} className="cal" />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center hoboFont">{CardTitle}</h5>
        <p className="dated text-center nunito-el">{CardDate}</p>
        <div className="d-flex justify-content-center mt-auto">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={EventURL}
            className="btn btn-primary align-center"
          >
            View Event
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
