import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'

const cardData = [
  
  {
    name: "Bandra Fair Volunteering",
    date: "11th-18th September 2022",
    imageSrc: "/images/events-2022-23/bandra_fair.jpg",
    instagramLink: "https://www.instagram.com/p/CjIk80KjKCb/?utm_source=ig_web_copy_link",
    reportLink: "https://drive.google.com/file/d/1i_4RK-enPMEj8lR7Zw_KDXl8QrhDnFWh/view?usp=sharing"
  },
  {
    name: "Beach Cleanup",
    date: "17th September 2022",
    imageSrc: "/images/events-2022-23/beach.jpeg",
    instagramLink: "https://www.instagram.com/reel/Cip6k8Qtmx6/?utm_source=ig_web_copy_link",
    reportLink: "https://drive.google.com/file/d/1vypdttG8DmKdVtVqgLdFQrC1YBcoD7Je/view?usp=sharing"
  },
  
  
  // Add more card data as needed
];

const SeptemberEventList = () => {
  return (
    <div className="card-list dynamic-grid">
      {cardData.map((card, index) => (
        <EventCard key={index} {...card} />
      ))}
    </div>
  );
};

export default SeptemberEventList;
