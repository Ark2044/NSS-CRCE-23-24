import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'
const cardData = [
    
      {
        name: "Animal Welfare Webinar",
        date: "5th October 2022",
        imageSrc: "/images/events-2022-23/animal_welfare.png",
        instagramLink: "https://www.instagram.com/p/CjX0_edPhlW/?utm_source=ig_web_copy_link",
        reportLink: "https://drive.google.com/file/d/1nfmes96q46ee7usIEDboo9GTyFO6MS0t/view?usp=sharing"
      },
      {
        name: "Master Chef CRCE 2022",
        date: "13th October 2022",
        imageSrc: "/images/events-2022-23/master_chef.jpg",
        instagramLink: "https://www.instagram.com/tv/Cjs8sOmjC8E/?utm_source=ig_web_copy_link",
        reportLink: "https://drive.google.com/file/d/1a4jXdyBqWa4HY8GYLNfTm9H95SCp75YN/view?usp=sharing"
      },
];

const OctoberEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default OctoberEventList;
