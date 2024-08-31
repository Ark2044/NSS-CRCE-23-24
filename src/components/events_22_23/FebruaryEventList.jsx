import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'
const cardData = [
    {
        name: "Nature's Trail",
        date: "5th February 2023",
        imageSrc: "/images/events-2022-23/natty.jpeg",
        instagramLink: "https://www.instagram.com/reel/CoNNh7EjYAv/?igshid=YmMyMTA2M2Y=",
        reportLink: "https://drive.google.com/file/d/1Z_hOanRQtiqy17ZMvHiyiIoXgaBsYYHy/view?usp=sharing"
    },
    {
      name: "Stem Cell Seminar",
      date: "7th February 2023",
      imageSrc: "/images/events-2022-23/stem.jpeg",
      instagramLink: "https://www.instagram.com/p/CoUjo4_yCBT/?igshid=YmMyMTA2M2Y=",
      reportLink: ""
  },
  {
    name: "Blood Donation 2",
    date: "14th February 2023",
    imageSrc: "/images/events-2022-23/bld.jpeg",
    instagramLink: "https://www.instagram.com/p/CokICbBNhPj/?igshid=YmMyMTA2M2Y=",
    reportLink: ""
},
    


];

const FebruaryEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default FebruaryEventList;
