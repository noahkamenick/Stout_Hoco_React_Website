import React from "react";
import SectionHeading from "./SectionHeading";
import EventCard from "./EventCard";
import "./Events.css";

const cardEvents = [
  {
    id: 1,
    CardTitle: "Banner Battle Begins!",
    CardDate: "Mon Oct. 3rd - Thurs Oct. 6th",
    EventURL: "https://cglink.me/2db/r1769562",
  },
  {
    id: 2,
    CardTitle: "Food Drive Battle Begins!",
    CardDate: "Mon Oct. 3rd - Thurs Oct. 6th",
    EventURL: "https://cglink.me/2db/r1769533",
  },
  {
    id: 3,
    CardTitle: "Medallion Hunt",
    CardDate: "Mon Oct. 3rd - Until Found",
    EventURL: "https://cglink.me/2db/r1798915",
  },
  {
    id: 4,
    CardTitle: "Glow In The Dark Bingo",
    CardDate: "Mon Oct. 3rd",
    EventURL: "https://cglink.me/2db/r1810354",
  },
  {
    id: 5,
    CardTitle: "Soapbox Derby",
    CardDate: "Tues Oct. 4th",
    EventURL: "https://cglink.me/2db/r1769385",
  },
  {
    id: 6,
    CardTitle: "Eric Dittelman",
    CardDate: "Wed Oct. 5th",
    EventURL: "https://cglink.me/2db/r1626493",
  },
  {
    id: 7,
    CardTitle: "Chalking Competition",
    CardDate: "Thurs Oct. 6th",
    EventURL: "https://cglink.me/2db/r1769931",
  },
  {
    id: 8,
    CardTitle: "Ryan Kelly - (Youth Pastor Ryan)",
    CardDate: "Fri Oct. 7th",
    EventURL: "https://cglink.me/2db/r1626401",
  },
];

const CardContainer = (props) => (
  <div className="cards-container container">
    {props.cards.map((card) => (
      <EventCard
        CardTitle={card.CardTitle}
        CardDescription={card.CardDescription}
        CardDate={card.CardDate}
        EventURL={card.EventURL}
        CardAlt={card.CardAlt}
        CardImgURL={card.CardImgURL}
      />
    ))}
  </div>
);

function HomecomingEvents() {
  return (
    <>
      <SectionHeading
        headerText="Events"
        subheadText="Check out all the events for Homecoming week! "
        hrid="events"
      />

      <CardContainer cards={cardEvents} />
    </>
  );
}

export default HomecomingEvents;
