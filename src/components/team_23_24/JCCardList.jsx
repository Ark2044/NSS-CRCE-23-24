import React from 'react';
import MemberCard from './MemberCard';
import './CardList.css';

const cardData = [
    {
        name: "Shreya Joshi",
        designation: "Event Coordinator",
        imageSrc: "/images/teammembers/team-members-2023-24/shreya_joshi.jpg",
        linkedinLink: "https://www.linkedin.com/in/shreya-joshi-74b79a289",
        instagramLink: "https://instagram.com/shreya_2_3_1?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
    },
    {
        name: "Andronicus Lall",
        designation: "Event Coordinator",
        imageSrc: "/images/teammembers/team-members-2023-24/andronicus.jpg",
        linkedinLink: "https://www.linkedin.com/in/andronicus-brandon-lall-a2648b286/",
        instagramLink: "https://www.instagram.com/andronicus_lall/?next=%2F",
    },
    {
        name: "Ronak Raut",
        designation: "Event Coordinator",
        imageSrc: "/images/teammembers/team-members-2023-24/ronak.jpg",
        linkedinLink: "https://www.linkedin.com/in/ronak-raut-817487254/",
        instagramLink: "https://www.instagram.com/ronak__raut__2004/",
    },
    {
        name: "Mansi Chache",
        designation: "Secretary",
        imageSrc: "/images/teammembers/team-members-2023-24/mansi.jpg",
        linkedinLink: "https://www.linkedin.com/in/mansi-chache-421047282",
        instagramLink: "https://instagram.com/mansi_chache?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
    },
    {
        name: "Armaan Shaikh",
        designation: "Documentation Incharge",
        imageSrc: "/images/teammembers/team-members-2023-24/armaan2.jpg",
        linkedinLink: "https://www.linkedin.com/in/armaan-shaikh-704a19260",
        instagramLink: "https://instagram.com/armaan_2411?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
    },
     {
        name: "Shreya Ghorpade",
        designation: "Junior Webmaster",
        imageSrc: "/images/teammembers/team-members-2023-24/shreya_ghorpade.jpg",
        linkedinLink: "https://www.linkedin.com/in/shreya-g-a697b8272/",
        githubLink: "https://github.com/shreya64684",
        instagramLink: "https://www.instagram.com/shreyaghorpade11?igsh=OXB1M3Rxb2hjaXF4",
    },
    {
        name: "Niraj Nagpurkar",
        designation: "Inventory In-charge",
        imageSrc: "/images/teammembers/team-members-2023-24/niraj.jpg",
        linkedinLink: "https://www.linkedin.com/in/niraj-nagpurkar-b09415284",
        instagramLink: "https://instagram.com/niraj_2302?igshid=NTc4MTIwNjQ2YQ==",
    },
    // Add more card data as needed
];

const JCCardList = () => {
    return (
        <div className="dynamic-grid">
            {cardData.map((card, index) => (
                <MemberCard key={index} {...card} />
            ))}
        </div>
    );
};

export default JCCardList;
