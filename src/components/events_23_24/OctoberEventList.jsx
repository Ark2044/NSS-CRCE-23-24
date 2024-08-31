import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'


const cardData = [
    {
        name: "Swaccha Bharat Campaign (MU)",
        date: "1st October 2023",
        imageSrc: "/images/events-2023-24/SwacchtaHiSeva.jpg",
        instagramLink: "https://www.instagram.com/p/Cx-C-bdoNua/",
        reportLink: "https://drive.google.com/file/d/1rGDMuRBRlEsOgJLCo4OM5YaMcz8xLyqS/view?usp=sharing"
      },
      {
        name: "Animal Welfare Day (Webinar)",
        date: "1st October 2023",
        imageSrc: "/images/events-2023-24/AnimalWelfareDay.jpg",
        instagramLink: "https://www.instagram.com/p/CyCtB0myGBj/",
        reportLink: "https://drive.google.com/file/d/1h34ngjBmQk9CEjE7LtHsleJFO_qm621Q/view?usp=sharing"
       
      },
      {
        name: "Bhajan Sandhya (MU)",
        date: "2nd October 2023",
        imageSrc: "/images/events-2023-24/Bhajan.jpg",
        // instagramLink: "",
        reportLink: "https://drive.google.com/file/d/1xbULKsiHaQrY_wzOZjW4VsfaUgpkRDHI/view?usp=sharing"
      },
      {
        name: "World Teacher's Day",
        date: "5th October 2023",
        imageSrc: "/images/events-2023-24/TeachersDayPost.jpg",
        instagramLink: "https://www.instagram.com/p/CzQKK70o-tg/",
        reportLink: "https://drive.google.com/file/d/1JSvGilgdP8w_-TQdNXYoZwVk4JeanogJ/view?usp=sharing"
      },
      {
        name: "Bandra Fair Appreciation",
        date: "6th October 2023",
        imageSrc: "/images/events-2023-24/BandraFairAppr.jpg",
        instagramLink: "https://www.instagram.com/p/CzQKnJ2SYvV/",
        //reportLink: "/Report-PDF/.pdf"
      },
      {
        name: "Nirmalya Mukti (Workshop)",
        date: "13th October 2023",
        imageSrc: "/images/events-2023-24/Nirmalyapost.jpg",
        instagramLink: "https://www.instagram.com/p/CzQLPOEIz70/",
        reportLink: "https://drive.google.com/file/d/1Y_uwBf_toSWdhQAixHcnN31r1b5FUM3g/view?usp=sharing"
      },
      {
        name: "MasterChef",
        date: "16th October 2023",
        imageSrc: "/images/events-2023-24/Masterchefposter.jpg",
        instagramLink: "https://www.instagram.com/p/CzdOYsyyBY1/",
        reportLink: "https://drive.google.com/file/d/1YB5FckCmZBrQA1-2GEvsge4fpZVlKBXX/view?usp=sharing"
      },
      {
        name: "FoodFest",
        date: "18th October 2023",
        imageSrc: "/images/events-2023-24/Foodfest23.jpg",
        instagramLink: "https://www.instagram.com/p/Czn-uKiN_u6/",
        reportLink: "https://drive.google.com/file/d/1jKm2NoXY8ZIQUmwjEOZoocIOCKq_Q7zP/view?usp=sharing"
      },
      {
        name: "National Unity Day",
        date: "31st October 2023",
        imageSrc: "/images/events-2023-24/NationalUnityDay.jpg",
        instagramLink: "https://www.instagram.com/p/C07N7NsyYU7/",
        reportLink: "https://drive.google.com/file/d/1WvG5xgbx4aD0giXLSr1Fj2dgueJdB0XD/view?usp=sharing"
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
