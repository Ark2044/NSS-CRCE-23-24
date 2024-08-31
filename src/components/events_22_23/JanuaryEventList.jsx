import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'
const cardData = [
  {
    name: "Republic Day Street Play",
    date: "26th January 2023",
    imageSrc: "/images/events-2022-23/street.jpeg",
    instagramLink: "https://www.instagram.com/reel/Cn3o8IcjLgp/?igshid=YmMyMTA2M2Y=",
    reportLink: "https://drive.google.com/file/d/1WCcwbD0LkBiy-MXArp0OvpOn5MGAFyS7/view?usp=sharing"
},



];

const JanuaryEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default JanuaryEventList;
