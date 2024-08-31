import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
// Import images as needed
import { MDBIcon } from "mdb-react-ui-kit";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "August: Tarang",
      imageURL: "/images/carou_img/tarang.jpg",
      month: "August",
    },
    {
      title: "August: Independence Day",
      imageURL: "/images/carou_img/indclg.jpg",
    },
    {
      title: "August: Blood Donation 1",
      imageURL: "/images/carou_img/blooddonclg.jpg",
    },
  
    {
      title: "September: Bandra Fair 2023",
      imageURL: "/images/carou_img/bandrafairclg.jpg",
    },
    {
      title: "September: NSS CRCE X FSAI Ganesh Mandal Audit",
      imageURL: "/images/carou_img/fsaiclg.jpg",
    },
    {
      title: "October: MasterChef 2023",
      imageURL: "/images/carou_img/masterchefclg23.jpg",
    },
    {
      title: "October: FoodFest 2023",
      imageURL: "/images/carou_img/Foodfestclg.jpg",
    },
    {
      title: "December : Human Rights Day Poster Donation",
      imageURL: "/images/carou_img/posterclg.jpg",
    },
    
    // {
    //   title: "January : Ayushmaan Yojana",
    //   imageURL: require("../carou_img/prin2.jpg"),
    // },
    
    {
      title: "January : Republic Day",
      imageURL: "/images/carou_img/republicclg.jpg",
    },
    {
      title: "February : Stem Cell Donation",
      imageURL: "/images/carou_img/stemcellclg.jpg",
    },
    {
      title: "February : Blood Donation 2",
      imageURL: "/images/carou_img/blddon2clg.jpg",
    },
    {
      title: "March : Anti Plastic Awareness",
      imageURL: "/images/carou_img/paperdonclg.jpg",
    },
    {
      title: "March : Orphanage Orientation, Andheri",
       imageURL: "/images/carou_img/orphanclg.jpg",
    },
    {
      title: "March : Domestic Violence & Drug Awareness Street Play",
       imageURL: "/images/carou_img/skitclg.jpg",
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  // Function to auto-scroll to the next slide
  const autoScroll = () => {
    const newIndex = (activeIndex + 1) % items.length;
    updateIndex(newIndex);
  };

  useEffect(() => {
    // Set up auto-scrolling interval (adjust the duration as needed)
    const intervalId = setInterval(autoScroll, 5000); // Auto-scroll every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [activeIndex, autoScroll]); // Include autoScroll as a dependency

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="main-carousel"
      style={{
        position: "relative",
        margin: "20px auto",
        width: '55%',
        '@media (max-width: 950px)': {
          width: '90%'
        },
        maxHeight: "40%",
        overflow: "hidden",
      }}
    >
      <div
        className="carousel"
        style={{
          display: "flex",
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: "transform 0.5s",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            <img
              className="carousel-img"
              src={item.imageURL}
              alt={item.title}
              style={{
                width: "80%",
                borderRadius: "8px",
              }}
              loading="lazy"
              onContextMenu={handleContextMenu}
            />
            <div
              className="carousel-item-text"
              style={{
                marginTop: "10px",
                fontWeight: "bolder",
                fontSize: "28px",
              }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <IconButton
          className="button-arrow"
          onClick={() => updateIndex(activeIndex - 1)}
          style={{
            color: "#fff",
            backgroundColor: "#2196f3",
            borderRadius: "50%",
            width: "40px",
          }}
        >
          <span className="material-symbols-outlined"><MDBIcon fas icon="chevron-left" size='lg'/></span>
        </IconButton>

        <IconButton
          className="button-arrow"
          onClick={() => updateIndex(activeIndex + 1)}
          style={{
            color: "#fff",
            backgroundColor: "#2196f3",
            borderRadius: "50%",
            width: "40px",
          }}
        >
          <span className="material-symbols-outlined"><MDBIcon fas icon="chevron-right" size='lg'/></span>
        </IconButton>
      </div>
    </div>
  );
};
