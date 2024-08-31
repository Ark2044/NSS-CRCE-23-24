import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'
const cardData = [
    {
        name: "Energy Conservation Webinar",
        date: "13th December 2022",
        imageSrc: "/images/events-2022-23/energy.jpeg",
        instagramLink: "https://www.instagram.com/p/CjX0_edPhlW/?utm_source=ig_web_copy_link",
        reportLink: "https://drive.google.com/file/d/1SMcMbtC7j0l6WQuh9k5o7cZn9yzhcJLE/view?usp=sharing"
    },
    {
      name: "Marine Pollution Prevention",
      date: "8th December 2022",
      imageSrc: "/images/events-2022-23/marine.jpeg",
      instagramLink: "https://www.instagram.com/p/CmGvUKXjK24/?utm_source=ig_web_copy_link",
      reportLink: "https://drive.google.com/file/d/1mLE1vtq4z74-bvDasv4dhwjHraIeR33H/view?usp=sharing"
  },
    
   

];

const DecemberEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default DecemberEventList;
