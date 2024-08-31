import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'

const cardData = [
  {
    name: "Domestic Violence and Drug Awareness Street Play",
    date: "2nd March 2024",
    imageSrc: "/images/events-2023-24/StreetPlayAndheri.jpg",
    instagramLink: "https://www.instagram.com/p/C5bprGiyfFn/",
    reportLink: "https://drive.google.com/file/d/1m6IQfMOEbyr65yxLWQ0VBKaLiuGszvlC/view?usp=sharing",
  },
    {
        name: "Beach Cleanup Drive",
        date: "3rd March 2024",
        imageSrc: "/images/events-2023-24/BeachCleanup.png",
        instagramLink: "https://www.instagram.com/p/C5bp-4uygEX/",
        reportLink: "https://drive.google.com/file/d/1r9lrPZ7VfiD_BqxaeYONUCoYmGhGcINW/view?usp=sharing"
    },
    {
      name: "Orphanage Visit, Computer Survey",
      date: "8th March 2024",
      imageSrc: "/images/events-2023-24/OrphanageVisit.jpg",
      instagramLink: "https://www.instagram.com/p/C5lRoA0yt-O/",
      reportLink: "https://drive.google.com/file/d/1PCVoL-7S84N8G5bJoq3cW2BiyksLZhEu/view?usp=sharing",
    },
    {
      name: "Health Survey",
      date: "10th March 2024",
      imageSrc: "/images/events-2023-24/HealthSurvey.jpg",
      instagramLink: "https://www.instagram.com/p/C5lRy3IyaJy/",
      reportLink: "https://drive.google.com/file/d/1kkXcAH0glEvJ4Qv0DM21eY4mP4C6oeB1/view?usp=sharing",
    },
    {
      name: "International River Clean Day",
      date: "14th March 2024",
      imageSrc: "/images/events-2023-24/RURWebinar.jpg",
      instagramLink: "https://www.instagram.com/p/C5lS89vS5ua/",
      reportLink: "https://drive.google.com/file/d/1f03fRD6M3XzSznk6ZiMpVLPvwCAO_gAo/view?usp=sharing"
    },
    {
      name: "Anti-Plastic Awareness",
      date: "22nd March 2024",
      imageSrc: "/images/events-2023-24/AntiPlastic.jpg",
      instagramLink: "https://www.instagram.com/p/C6GOd9iob9V/",
      reportLink: "https://drive.google.com/file/d/1Z_F-r0NShvacoj3_cpBzYcNvUn0VUZtG/view?usp=sharing"
    },
    {
      name: "Act-A-Thon",
      date: "23rd March 2024",
      imageSrc: "/images/events-2023-24/Actathon.jpg",
      instagramLink: "https://www.instagram.com/p/C6GQGyCr0M2/",
      reportLink: "https://drive.google.com/file/d/1XDvPNmjXHHGE2ijN1eHJailCv6mHo-gh/view?usp=sharing"
    },
    
];

const MarchEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default MarchEventList;
