import React from 'react';
import './EventCard.css'
import { Slide } from 'react-awesome-reveal';

const EventCard = ({ name, date, imageSrc, instagramLink, reportLink }) => {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  return (
    <Slide direction='up' delay={2} triggerOnce={true} duration={1500}>
    <div className="event-custom-card animate__animated animate__backInUp animate__slower">
      <img src={imageSrc} alt={name} className="event-img" loading="lazy" onContextMenu={handleContextMenu}/>
      <div className="card-info">
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
      <div className="social-icons">
        {instagramLink && (
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        )}
        {reportLink && (
          <a href={reportLink} target="_blank" rel="noopener noreferrer">
            <i className='fa fa-file-pdf'></i>
          </a> 
        )}
      </div>
    </div>
    </Slide>
  );
};

export default EventCard;