import React from 'react';
import MemberCard from './MemberCard';
import './CardList.css';

const cardData = [
    {
        name: "Prof. Pradeep Singh",
        designation: "Program Officer",
        imageSrc: "/images/teammembers/team-members-2023-24/pradeep.jpg"

    },
    {
        name: "Prof. Sunil Yadav",
        designation: "Program Officer",
        imageSrc: "/images/teammembers/team-members-2022-23/Sunil.jpg"

    },
    {
        name: "Prof. Deepika Singh",
        designation: "Program Officer",
        imageSrc: "/images/teammembers/team-members-2022-23/Deepika.jpeg"

    },
    // Add more card data as needed
];

const POCardList = () => {
    return (
        <div className="dynamic-grid">
            {cardData.map((card, index) => (
                <MemberCard key={index} {...card} />
            ))}
        </div>
    );
};

export default POCardList;
