import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'
const cardData = [
    {
        name: "Python and ML Workshop",
        date: "18th March 2023",
        imageSrc: "/images/events-2022-23/py.jpeg",
        instagramLink: "https://www.instagram.com/p/CpzAzccDBqg/?igshid=YmMyMTA2M2Y=",
        reportLink: ""
    }
    


];

const MarchEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default MarchEventList;
