import React from 'react';
import MemberCard from './MemberCard';
import './CardList.css';

const cardData = [
    {
        name: "Jenny Lopes",
        designation: "Event Co-ordinator",
        imageSrc: "/images/teammembers/team-members-2022-23/jenny.jpg",
        linkedinLink: "",
        instagramLink: ""
    },
    {
        name: "Ratan Singh",
        designation: "Event Co-ordinator",
        imageSrc: "/images/teammembers/team-members-2023-24/ratan.jpg",
        linkedinLink: "https://www.linkedin.com/in/ratan-singh-327b74228/",
        instagramLink: "https://www.instagram.com/ratan.singh_21/"
    },
    {
        name: "Anuf Shaikh",
        designation: "Event Co-ordinator",
        imageSrc: "/images/teammembers/team-members-2022-23/anuf.jpg",
        linkedinLink: "https://www.linkedin.com/in/anuf-shaikh",
        instagramLink: "https://instagram.com/anuuu._0?igshid=YmMyMTA2M2Y="
    },
    {
        name: "Royce Dmello",
        designation: "Secretary",
        imageSrc: "/images/teammembers/team-members-2022-23/royce.jpg",
        linkedinLink: "https://www.linkedin.com/in/royce-dmello-366153247/",
        instagramLink: "https://www.instagram.com/royce_dmello20/"
    },
    {
        name: "Rishabh Pathak",
        designation: "Documentation Incharge",
        imageSrc: "/images/teammembers/team-members-2022-23/rishabh.jpg",
        linkedinLink: "https://www.linkedin.com/in/rishabh-pathak-4a573a22b",
        instagramLink: "https://www.instagram.com/invites/contact/?i=1pswf3rfsd4fo&utm_content=nky71zo"
    },
    {
        name: "Janvi Naik",
        designation: "Design Head",
        imageSrc: "/images/teammembers/team-members-2022-23/janvi.jpg",
        linkedinLink: "",
        instagramLink: "https://instagram.com/janvinaik_15"
    },
    {
        name: "Neeraj Yadav",
        designation: "Treasurer",
        imageSrc: "/images/teammembers/team-members-2022-23/neeraj.jpg",
        linkedinLink: "https://www.linkedin.com/in/neeraj-yadav-1497a3221/",
        instagramLink: "https://www.instagram.com/neer_gyan/"
    },
    {
        name: "Saahil Fernandes",
        designation: "Junior Webmaster",
        imageSrc: "/images/teammembers/team-members-2022-23/saahil.jpg",
        linkedinLink: "",
        instagramLink: "https://www.instagram.com/fernandesaahil/"
    },
    {
        name: "Erin Fernandes",
        designation: "Social Media Manager",
        imageSrc: "/images/teammembers/team-members-2022-23/erin.jpg",
        linkedinLink: "",
        instagramLink: "https://instagram.com/erinfernandes20?igshid=YmMyMTA2M2Y="
    },
    {
        name: "Darsh Virani",
        designation: "Procurement and Inventory Co-ordinator",
        imageSrc: "/images/teammembers/team-members-2022-23/darsh.jpg",
        linkedinLink: "",
        instagramLink: ""
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
