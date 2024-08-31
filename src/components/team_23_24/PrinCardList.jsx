import React from 'react';
import MemberCard from './MemberCard';
import './CardList.css';

const cardData = [
    {
        name: "Dr. Surendra Singh Rathod",
        designation: "Principal",
        imageSrc: "/images/teammembers/team-members-2023-24/prin.jpg",
    },
    
    // Add more card data as needed
];

const PrinCardList = () => {
    return (
        <div 
        // className="dynamic-grid"
        style={{display: 'flex', justifyContent: 'center'}}
        >
            {cardData.map((card, index) => (
                <MemberCard key={index} {...card} />
            ))}
        </div>
    );
};

export default PrinCardList;
