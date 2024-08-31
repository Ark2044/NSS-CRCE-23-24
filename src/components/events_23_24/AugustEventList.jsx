import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'

const cardData = [
  {
    name: "Orientation",
    date: "1st August 2023",
    imageSrc: "/images/events-2023-24/Orient23.jpg",
    instagramLink: "https://www.instagram.com/p/CvhoKb6t5gS/",
    reportLink: "https://drive.google.com/file/d/1LybKG5e3Swgv_SdXHNBwSaBv8CguFBKH/view?usp=sharing"
  },
  {
    name: "Tarang Aasha Ki",
    date: "10 August 2023",
    imageSrc: "/images/events-2023-24/tarang.jpg",
    instagramLink: "https://www.instagram.com/p/Cv1cuaiyb3O/?img_index=1",
    reportLink: "https://drive.google.com/file/d/11J27e1qZuzo7yQnF2TbgMNYSZaTdj7iP/view?usp=sharing",
  },
  {
    name: "Meri Matti Mera Desh (Tree Plantation)",
    date: "16th August 2023",
    imageSrc: "/images/events-2023-24/Plant23.jpg",
    instagramLink: "https://www.instagram.com/p/CwPRy_VN1hi/",
    reportLink: "https://drive.google.com/file/d/1TSDmebFZmRYzoKhjREntxzb3iCmXMJnX/view?usp=sharing"
  },
  {
    name: "Blood Donation Camp 1",
    date: "17th August 2023",
    imageSrc: "/images/events-2023-24/BloodDonationCamp23.jpg",
    instagramLink: "https://www.instagram.com/p/CwPS1BFy7FZ/",
    reportLink: "https://drive.google.com/file/d/1GUPKrPoJdtVOsh8d-w-0jMB43WPZMaR9/view?usp=sharing"
  },


  {
    name: "Misson Mangroves (Webinar)",
    date: "22nd August 2023",
    imageSrc: "/images/events-2023-24/Mangrove23.jpg",
    instagramLink: "https://www.instagram.com/p/CwPTK9GteK9/",
    reportLink: "https://drive.google.com/file/d/1k5ZfkwGOrArgqIGiVBBDqLT7VzgdfWB3/view?usp=sharing"
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
