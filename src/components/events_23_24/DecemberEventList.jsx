import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'



const cardData = [
    {
        name: "Pollution Control Day (Webinar)",
        date: "2nd December 2023",
        imageSrc: "/images/events-2023-24/pollution.jpg",
        instagramLink: "https://www.instagram.com/p/C07Ogn6yRRV/",
        reportLink: "https://drive.google.com/file/d/1Mk5Q1zQgYKiowlIukggJrwtYBey6cuJk/view?usp=sharing"
    },
    {
      name: "Human Rights Awareness",
      date: "10th December 2023",
      imageSrc: "/images/events-2023-24/Human rights post.jpg",
      instagramLink: "https://www.instagram.com/p/C07O9-Qrf1-/",
      reportLink: "https://drive.google.com/file/d/13ZHFmKEvJ52BTc3_04w8pXCxYjEjQ83l/view?usp=sharing"
    },
    {
      name: "Energy Conservation Day",
      date: "14th December 2023",
      imageSrc: "/images/events-2023-24/Energy conservation post.jpg",
      instagramLink: "https://www.instagram.com/p/C2SzkyILErh/",
      reportLink: "https://drive.google.com/file/d/1xyUNMDdGQleCcGSa5bXsrZf0vTNwN53Q/view?usp=sharing"
    },
    { 
      name: "Mega Deep Cleaning Programme (MU)",
      date: "31st December 2023",
      imageSrc: "/images/events-2023-24/Mega Cleaning drive post.jpg",
      instagramLink: "https://www.instagram.com/p/C2Sz-EWLqba/",
      reportLink: "https://drive.google.com/file/d/1s_zKumVLsUhb_0krHVex94O206LCnzpJ/view?usp=sharing"
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
