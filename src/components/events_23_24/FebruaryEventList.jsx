import React from 'react';
import EventCard from './EventCard';
import './EventList.css'
import './CardList.css'

const cardData = [
    {
        name: "Vegan Outreach Programme",
        date: "3rd February 2024",
        imageSrc: "/images/events-2023-24/VeganOutreach.jpg",
        instagramLink: "https://www.instagram.com/p/C4SDNYmNQ9g/",
        reportLink: "https://drive.google.com/file/d/1bhDcJZfxbatKfGhsUmSvOzYb4A2UEBqe/view?usp=sharing"
    },
    {
      name: "Stem Cell Donation Drive",
      date: "12th February 2024",
      imageSrc: "/images/events-2023-24/StemCell.jpg",
      instagramLink: "https://www.instagram.com/p/C4fZ1Yny_zs/",
      reportLink: "https://drive.google.com/file/d/1MBPd3RhxanT9ZwB8d7ibtB3QiwOTGW66/view?usp=sharing"
    },
    {
      name: "Blood Donation Camp 2",
      date: "14th February 2024",
      imageSrc: "/images/events-2023-24/BloodDonation2.jpg",
      instagramLink: "https://www.instagram.com/p/C4faUf_SMnY/",
      reportLink: "https://drive.google.com/file/d/1lfoQIr_xXTCyooB4tg_fewA4AEfKWTLB/view?usp=sharing"
    },
    {
      name: "Polio Awareness (Webinar)",
      date: "27th February 2024",
      imageSrc: "/images/events-2023-24/PolioWebinar.jpg",
      instagramLink: "https://www.instagram.com/p/C4faqxDyNpo/",
      reportLink: "https://drive.google.com/file/d/1m12kg_3MwfICllgQweWAK0_s4oirtFDe/view?usp=sharing"
    },
    {
      name: "Mental Health (Seminar)",
      date: "29th February 2024",
      imageSrc: "/images/events-2023-24/MentalHealth.jpg",
      instagramLink: "https://www.instagram.com/p/C5bpZRQykHN/",
      reportLink: "https://drive.google.com/file/d/1C_7_t8sPp-IjY9fLDIGzMgYb5_60G7jH/view?usp=sharing"
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
