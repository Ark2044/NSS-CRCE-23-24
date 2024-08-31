"use client";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box } from "@mui/system";
import { Slide } from "react-awesome-reveal";
import IconButton from "@mui/material/IconButton";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import ReactCardFlip from "react-card-flip";
import { CampCarousel } from "@/components/campflyer/CampCarousel";
const cardData = [
  {
    cardImageSrc: "/images/camp/CampDay1.jpg",
    cardTitle: "Day 1: Craft Work for Village School Kids",
    cardDescription:
      "The journey began with energetic dance in the bus, upon reaching the camp site we cleaned our rooms, visited the school and village site area, organized team bonding activities and actively participated in them.",
    instaLink: "https://www.instagram.com/link1",
    reportLink: "https://drive.google.com/file/d/1lk2jXHK35fzjTr6RlC6haLSBJDLo4StM/view?usp=sharing",
  },
  {
    cardImageSrc: "/images/camp/CampDay2.jpg",
    cardTitle: "Day 2: Dance Choreography for Republic Day",
    cardDescription:
      "Volunteers sparked creativity at the village school with craft sessions, lively dance choreography, and vibrant paintings, creating an inspiring day of artistic collaboration with the students. ",
    instaLink: "https://www.instagram.com/link2",
    reportLink: "https://drive.google.com/file/d/1aLunJPB8Dg2vTvKwG-_dGRpH9UUu1Pvw/view?usp=sharing",
  },
  {
    cardImageSrc: "/images/camp/CampDay2-2.jpg",
    cardTitle: "Day 2: Warli Painting",
    cardDescription:
      "A group of highly motivated volunteers painted the village school with vibrant colours. Their hardwork was truly visible in their work.",
    instaLink: "https://www.instagram.com/link2",
    reportLink: "https://drive.google.com/file/d/1aLunJPB8Dg2vTvKwG-_dGRpH9UUu1Pvw/view?usp=sharing",
  },
  {
    cardImageSrc: "/images/camp/CampDay3.jpg",
    cardTitle: "Day 3: Village Cleanup",
    cardDescription:
      "Volunteers dedicated the day to village cleanup, enhancing the surroundings. In the evening, a spirited street play competition brought everyone together, fostering team camaraderie and creating lasting memories.",
    instaLink: "https://www.instagram.com/link2",
    reportLink: "https://drive.google.com/file/d/1YvUcQGegnUFZZAU6ygranSZ2-DdWrFDu/view?usp=sharing",
  },
  {
    cardImageSrc: "/images/camp/CampDay4.jpg",
    cardTitle: "Day 4: Compost Making",
    cardDescription:
      "The day started with the awesome taste of missal pav, the volunteers got ready and headed towards our destination where we did the compost work, which displayed the unity among the volunteers. At night, everyone played housie, danced together and enjoyed the memorable campfire night.",
    instaLink: "https://www.instagram.com/link2",
    reportLink: "https://drive.google.com/file/d/1xw9MSiYEaZeg4nOgHmqrd4wgrvDM6H-O/view?usp=sharing",
  },
  {
    cardImageSrc: "/images/camp/CampDay5.jpg",
    cardTitle: "Day 5: Ayushman Yojana Registration",
    // cardDescription: 'The day kick started with volunteers heading towards the yoga center near the river side, we welcomed the principal sir to the camp, then the volunteers embarked for a crucial event  where volunteers did registration of village people for the Ayushman Yojana campaign. In the evening, we discussed about the next day trek plan and winded our day early as usual.',
    cardDescription:
      "The day began with volunteers gathering at the riverside yoga center, welcoming the principal sir for the camp. The volunteers embarked for a crucial event where volunteers did registration of village people for the Ayushman Yojana campaign. In the evening, we discussed about the next day trek plan and winded our day early as usual.",
    instaLink: "https://www.instagram.com/link2",
    reportLink: "https://drive.google.com/file/d/1bB1L06NrvbGO8iSzbMCKGgyfeidxue2A/view?usp=sharing",
  },
  {
    cardImageSrc: "/images/camp/CampDay6.jpg",
    cardTitle: "Day 6: Nature's Trail",
    cardDescription:
      "We started our day early, it was a challenging trek. We reached the top, took photos and enjoyed the amazing view of the village. Then we enjoyed the movie night and played many games.",
    instaLink: "https://www.instagram.com/link2",
    reportLink: "https://drive.google.com/file/d/1KDvOGW8FolFRWXP_IV6cs91D2onj1vWj/view?usp=sharing",
  },
  {
    cardImageSrc: "/images/camp/CampDay7.jpg",
    cardTitle: "Day 7: Parenting Seminar",
    cardDescription:
      "On the last day everyone gathered for breakfast. The cultural team of volunteers went  to the school, interacted with the school students and conducted a parenting session. It was a wonderful, enjoyable and memorable camp which will be remembered for our lifetime.",
    instaLink: "https://www.instagram.com/link2",
    reportLink: "https://drive.google.com/file/d/1KT2hOXzB1Jd7gpnTLICUdAJxV5VVGPbu/view?usp=sharing",
  },
];

function Camp() {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const [flippedCards, setFlippedCards] = useState(
    Array(cardData.length).fill(false)
  );

  const handleClick = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  const handleHover = (index, isHovering) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = isHovering;
    setFlippedCards(newFlippedCards);
  };

  const Font = styled("div")({
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "3.5rem",
    color: "blue ",
    paddingTop: "20px",
    paddingBottom: "40px",
    "@media (max-width: 396px)": {
      fontSize: "2.2rem",
    },
    "@media (max-width: 297px)": {
      fontSize: "20px",
    },
  });

  const Font2 = styled("div")({
    fontFamily: "Source Code Pro",
    fontSize: "13px",
    paddingTop: "10px",
    paddingBottom: "50px",
    textAlign: "justify",
    display: "flex",
    alignItems: "center",
    margin: "0 40px 0 40px ",
  });

  return (
    <div
      className="camp"
      style={{
        marginTop: "-30px",
        // , backgroundColor: '#B0E0E6'
        width: "max-width",
      }}
    >
      <Box width={"100%"}>
        <Font variant="h1">NSS Camp 2023-24</Font>

        {/* <CampCarousel /> */}
        <video controls playsInline autoPlay muted loop width="100%" loading="lazy">
         <source src="/images/banner/CampVideo.mp4" type="video/mp4"/>
      </video>
        <Typography
          variant="h8"
          align="justify"
          color="black"
          paragraph
          className="para"
          
          sx={{ margin: "20px" }}
        >
          The 7-day NSS camp was a remarkable journey for all volunteers. We
          gained new insights, immersed ourselves in village life, and embraced
          local customs. Our daily activities ranged from making manure,
          cleaning communal spaces, to engaging in arts and crafts with
          students, and painting walls, which brought joy to the childrens
          lives. We also raised awareness about the governments Ayushman Yojana
          scheme and assisted villagers with registrations. The camp included
          daily reporting seminars for feedback and planning, providing us with
          invaluable lessons.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={4}
              md={3}
              lg={3}
              marginLeft={"20px"}
              //   style={{
              //     // margin: '0 10px',
              //     marginLeft: '20px'
              // }}
            >
              <ReactCardFlip
                isFlipped={flippedCards[index]}
                flipDirection="horizontal"
              >
                
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: "0 6px 8px rgba(0, 0, 0.3, 0.6)",
                  }}
                  justifyContent="center"
                  marginTop="30px"
                  alignItems="center"
                  variant="outlined"
                  color="green"
                  // onClick={handleClick}
                  onClick={() => handleClick(index)}
                  // onMouseEnter={() => handleHover(index, true)}
                  // onMouseLeave={() => handleHover(index, false)}
                >
                  <CardMedia
                    component="img"
                    alt={card.cardTitle}
                    height="300"
                    width="300px"
                    image={card.cardImageSrc}
                    onContextMenu={handleContextMenu}
                  />
                  <CardContent>
                    <Typography
                      // variant="h6"
                      component="div"
                    >
                      {card.cardTitle}
                    </Typography>
                    <div className="pdf-icon">
                      <IconButton
                        component="a"
                        color="primary"
                        href={card.reportLink}
                        target="_blank"
                        aria-label="View PDF"
                      >
                        <PictureAsPdfIcon fontSize="large" />
                      </IconButton>
                    </div>
                  </CardContent>
                </Card>
                
                
                <Card
                  sx={{
                    maxWidth: 345,
                    height: 400,
                    boxShadow: "0 6px 8px rgba(0, 0, 0.3, 0.6)",
                    "@media (max-width: 600px)": { height: 300 },
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  justifyContent="center"
                  marginTop="30px"
                  alignItems="center"
                  variant="outlined"
                  color="green"
                  onClick={() => handleClick(index)}
                  // onMouseEnter={() => handleHover(index, true)}
                  // onMouseLeave={() => handleHover(index, false)}
                >
                  <CardContent>
                    <Typography component="div">{card.cardTitle}</Typography>
                    {/* <Typography variant='h8' align="justify" paragraph style={{textAlign: "justify" , display: "flex" , justifyContent: "center"}}>
                              {card.cardDescription}
                            </Typography> */}
                    {index === 5 && (
                      <Typography
                        variant="h8"
                        align="justify"
                        paragraph
                        style={{
                          textAlign: "justify",
                          display: "flex",
                          justifyContent: "center",
                          // Add your specific CSS styles here for the 6th card's Typography paragraph
                          // For example:

                          fontSize: "14px", // Change font size
                        }}
                      >
                        {card.cardDescription}
                      </Typography>
                    )}

                    {index !== 5 && (
                      <Typography
                        variant="h8"
                        align="justify"
                        paragraph
                        style={{
                          textAlign: "justify",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {card.cardDescription}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
                
              </ReactCardFlip>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Camp;
