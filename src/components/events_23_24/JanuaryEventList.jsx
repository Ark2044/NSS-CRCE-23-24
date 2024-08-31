import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'

const cardData = [
    {
        name: "National Road Safety Week (MU)",
        date: "11th January 2024",
        imageSrc: "/images/events-2023-24/Road safety post.jpg",
        instagramLink: "https://www.instagram.com/p/C2ZO9RvyZfN/",
        reportLink: "https://drive.google.com/file/d/1Aj3_M8C7iZaJhBXoTsW-SKF6VHMKxjxU/view?usp=sharing"
    },
    
    {
        name: "POCSO (Seminar)",
        date: "18th January 2024",
        imageSrc: "/images/events-2023-24/POCSO.jpg",
        instagramLink: "https://www.instagram.com/p/C2ZQ1zhta5D/",
        reportLink: "https://drive.google.com/file/d/1oqJi3yDuS4l_ZuLuM-P_3JbXmNrYJqR0/view?usp=sharing"
    },
    {
        name: "HIV/AIDS Awareness (Webinar)",
        date: "19th January 2024",
        imageSrc: "/images/events-2023-24/HIV AIDS WEBINAR.jpg",
        instagramLink: "https://www.instagram.com/p/C2ZRNxWto9g/",
        reportLink: "https://drive.google.com/file/d/1tshpU7e-YLmr_AaRZuumIxZMI9VG6WhS/view?usp=sharing"
    },
    {
      name: "Republic Day",
      date: "26th January 2024",
      imageSrc: "/images/events-2023-24/RepublicDay.jpg",
      instagramLink: "https://www.instagram.com/reel/C4DeRbFtRJx/",
      reportLink: "https://drive.google.com/file/d/1JOJGtQczkGT1ViE378q3uUNtrIXCIeic/view?usp=sharing"
    },
    {
      name: "Documentation and Court Awareness (Skit)",
      date: "29th January 2024",
      imageSrc: "/images/events-2023-24/skit.png",
      instagramLink: "https://www.instagram.com/reel/C4SDaNDNlC1/",
      reportLink: "https://drive.google.com/file/d/1aBAlb2gtlyQDqI6tlhZS9SkC6R7T4mcs/view?usp=sharing"
    },
    {
      name: "Tax Awareness (Seminar)",
      date: "30th January 2024",
      imageSrc: "/images/events-2023-24/TaxAwareness.jpg",
      instagramLink: "https://www.instagram.com/p/C4SEh8eybQR/",
      reportLink: "https://drive.google.com/file/d/1wwh2J1WpvbKuHXl4DiABBDMhwOA1dKWB/view?usp=sharing"
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
