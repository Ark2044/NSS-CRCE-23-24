import React from 'react';
import MemberCard from './MemberCard';
import './CardList.css';

const cardData = [
    {
        name: "Mohit Pansare",
        designation: "President",
        imageSrc: "/images/teammembers/team-members-2022-23/mohit.jpg",
        linkedinLink: "https://www.linkedin.com/in/mohit-pansare/",
        instagramLink: "https://www.instagram.com/pansare.mohit/"
    },
    {
        name: "Anshula Raina",
        designation: "Event Head",
        imageSrc: "/images/teammembers/team-members-2022-23/anshula.jpg",
        linkedinLink: "https://www.linkedin.com/in/anshula-raina-244893215/",
        instagramLink: "https://www.instagram.com/anshula_raina/"
    },
    {
        name: "Himanshu Bhundere",
        designation: "Documentation Head",
        imageSrc: "/images/teammembers/team-members-2022-23/Himanshu.jpg",
        linkedinLink: "https://www.linkedin.com/in/himanshu-bhundere-573906213",
        instagramLink: "https://www.instagram.com/himanshubhundere/"
    },
    {
        name: "Divyansh Dalmia",
        designation: "Marketing Head",
        imageSrc: "/images/teammembers/team-members-2022-23/divyansh.jpeg",
        linkedinLink: "https://www.linkedin.com/in/divyansh-dalmia-46a287208/",
        instagramLink: "https://www.instagram.com/divyanshdalmia12/"
    },
    {
        name: "Ketaki Sarode",
        designation: "Public Relations Head",
        imageSrc: "/images/teammembers/team-members-2022-23/ketaki.jpg",
        linkedinLink: "https://www.linkedin.com/in/ketaki-sarode-a7329820b/",
        instagramLink: "https://www.instagram.com/ketaki_sarode/"
    },
    {
        name: "Amey Bagwe",
        designation: "Senior Webmaster",
        imageSrc: "/images/teammembers/team-members-2022-23/Amey.jpg",
        linkedinLink: "https://www.linkedin.com/in/amey-bagwe-296739209/",
        instagramLink: "https://www.instagram.com/ameybagwe_12/"
    },
    {
        name: "Nayonica Sherlin",
        designation: "Procurement and Inventory Head",
        imageSrc: "/images/teammembers/team-members-2022-23/nayonica.jpg",
        linkedinLink: "https://www.linkedin.com/in/nayonica-sherlin-049595209/",
        instagramLink: "https://www.instagram.com/nayonicasherlin_10/"
    },

    // Add more card data as needed
];

const SCCardList = () => {
    return (
        <div className="dynamic-grid">
            {cardData.map((card, index) => (
                <MemberCard key={index} {...card} />
            ))}
        </div>
    );
};

export default SCCardList;
