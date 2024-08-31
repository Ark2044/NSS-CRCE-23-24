import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'

const cardData = [
  {
    name: "Blood Donation 1",
    date: "11th August 2022",
    imageSrc: "/images/events-2022-23/blood_donate.png",
    instagramLink: "https://www.instagram.com/reel/ChNCrE5jDKC/?utm_source=ig_web_copy_link",
    reportLink: "https://drive.google.com/file/d/1j6Ck0OFPzvDpVGDGyqe8RZ1tOCrttoKt/view?usp=sharing"
  },
  {
    name: "Carbon Footprint Webinar",
    date: "20th August 2022",
    imageSrc: "/images/events-2022-23/carbon.png",
    instagramLink: "https://www.instagram.com/p/ChrO6WmPQdl/?utm_source=ig_web_copy_link",
    reportLink: "https://drive.google.com/file/d/1eSSGXa73iDiRaxb31MMGLE2pQDxkDNPy/view?usp=sharing"
  },
  {
    name: "Swacch Sagar Surakshit Sagar",
    date: "26th August 2022",
    imageSrc: "/images/events-2022-23/swachh.jpg",
    instagramLink: "https://www.instagram.com/p/Ch9zTODjgyt/?utm_source=ig_web_copy_link",
    reportLink: "https://drive.google.com/file/d/1XKMPmEVlk5RJJyx1Nncfm61Sb13tImVi/view?usp=sharing"
  },
 
  
  // Add more card data as needed
];

const AugustEventList = () => {
  return (
    <div className="card-list dynamic-grid">
      {cardData.map((card, index) => (
        <EventCard key={index} {...card} />
      ))}
    </div>
  );
};

export default AugustEventList;


// janvi - 9627,  64, 15 
// jenny - 9618   ,66, 15