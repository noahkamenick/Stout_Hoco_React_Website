import React from 'react'
import SectionHeading from './SectionHeading'
import MedallionCard from './MedallionCard';

const data = [
  {id: 1, CardTitle: "Medallion Found", Clue:"Clue:  Go Outside, Hug a Tree...or a flower...or a bush"},
];

const CardContainer = (props) => (
  <div className="cards-container container">
    {props.cards.map((card) => (
      <MedallionCard
        CardTitle={card.CardTitle}
        Clue={card.Clue}
      />
    ))}
  </div>
);

function Medallion() {
  return (
    <>
    <div className='container'>
    <SectionHeading
        headerText="Medallion"
        hrid="medallion"
        
      />

    <CardContainer cards={data} />
      
      

    </div>

    </>
  )
}

export default Medallion