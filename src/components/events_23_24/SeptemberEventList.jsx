import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'


const cardData = [
  
  {
    name: "International Day of Clean Air for Blue Skies (Webinar)",
    date: "7th September 2023",
    imageSrc: "/images/events-2023-24/CleanAirWeb23.jpg",
    instagramLink: "https://www.instagram.com/p/CxEL2iao2rI/",
    reportLink: "https://drive.google.com/file/d/1bxBxi7QU1d6V_IYH7bWg6uCPvh4WNxcK/view?usp=sharing"
  },
  {
    name: "Red Run Marathon (MU)",
    date: "10th September 2023",
    imageSrc: "/images/events-2023-24/MDACSXNSSMarathon23.jpg",
    instagramLink: "https://www.instagram.com/p/CxEMmMGI_1M/",
    reportLink: "https://drive.google.com/file/d/15hPZ9kYaKyPyTfbsDq9pPdgXSC29OScL/view?usp=sharing"
  },
  {
    name: "FSAI Training",
    date: "11th September 2023",
    imageSrc: "/images/events-2023-24/FSAI Training.jpg",
    instagramLink: "https://www.instagram.com/p/CxEN1-pIhf0/",
    reportLink: "https://drive.google.com/file/d/1TBe7WZBS57P6LzKSf4rjKTV-B38IzG6E/view?usp=sharing"
  },
  {
    name: "Bandra Fair Volunteering",
    date: "12th-15th September 2023",
    imageSrc: "/images/events-2023-24/Bandra-Fair-23.jpg",
    instagramLink: "https://www.instagram.com/p/CxfUP-CNy9F/",
    reportLink: "https://drive.google.com/file/d/1YqR8koV7uxIE6CzYb42f6GujnMldGQil/view?usp=sharing"
  },
  {
    name: "NSS CRCE X FSAI Ganesh Mandal Audit",
    date: "17th-19th September 2023",
    imageSrc: "/images/events-2023-24/FSAI2023.jpg",
    instagramLink: "https://www.instagram.com/p/CxkYLl9oIQZ/",
    reportLink: "https://drive.google.com/file/d/1K2VOduvO6tiJS76x6c6P3hvmfk1WYYt7/view?usp=sharing"
  },
  {
    name: "World Peace Day (Webinar)",
    date: "21st September 2023",
    imageSrc: "/images/events-2023-24/WorldPeaceDay23.jpg",
    instagramLink: "https://www.instagram.com/p/Cxqdc5kNsJB/",
    reportLink: "https://drive.google.com/file/d/1fkLJk9eT0W5VrvsHP1skk3sXc22vH_ja/view?usp=sharing"
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
