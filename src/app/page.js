'use client'
import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import CubeCarousel from "@/components/cubecarousel/CubeCarousel"
import { Stack } from "react-bootstrap";
import { Carousel } from "@/components/carousel/Carousel"

import AboutUs from "@/components/aboutus/AboutUs"
// import Banner from "../Banner";
// import ScrollAnimation from "../ScrollAnimation";
import "../components/cubecarousel/CubeCarousel.css";
// import Testimonials from "@/components/testimonials/Testimonials";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import Banner from "@/components/banner/BannerVideo";

function Home() {
  const styles = {
    newhome: {
      marginTop: "-35px",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    banner: {
      width: "auto",
      height: "500px",
      border: "black solid 2px",
      background: "#1976d2",
      // color: 'blue',
      "@media (max-width: 500px )": {
        height: "300px",
      },
    },
    aboutus: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // border: 'solid black 2px',
      height: "600px",
      // marginTop: 30,
    },
    h1: {
      // fontFamily: "Source Code Pro",
      padding: 10,
      fontSize: "40px",
      color: "midnightblue",
      marginTop: "10px",
      Animation: "bounce",
      fontWeight: 700,
      "@media (600px)": {
        fontSize: "30px",
      },
    },
    about: {
      margin: "2rem", // corrected syntax
      display: "grid",
      gridTemplateColumns: "[one] 50% [two] 50%",
      gridGap: -30,
      alignItems: "center",
      justifyContent: "center",
      width: "calc(100% - 2rem)",
      marginTop: "-3rem",
      // border: 'solid 2px black',
      "@media only screen and (max-width: 720px)": {
        gridTemplateColumns: "[one] 100%",
        gridTemplateRows: "[one] [two]",
      },
    },
    aboutText: {
      minWidth: "400px",
      margin: "1rem",
      minHeight: "250px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      // marginTop: '-5rem',
      // border: '1px solid rgb(255 255 255 / 31%)',
      // padding: '1rem',
      marginBottom: "2rem",
      borderRadius: "5px",
    },
    container: {
      height: "400px",
      width: "800px",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "2px 3px 5px 10px #ccc",
      marginTop: "20px",
      "@media(max-width: 1000px)": {
        width: "400px",
        minHeight: "600px",
        flexDirection: "column",
      },
    },
    right: {
      width: "400px",
      height: "400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      padding: 0,
    },
    rightImg: {
      height: "400px",
      width: "400px",
      objectFit: "cover",
      objectPosition: "center",
      "@media(max-width: 1000px)": {
        height: "300px",
      },
    },
    left: {
      width: "400px",
      height: "400px",
      margin: 0,
      padding: 0,
    },
    content: {
      margin: "50px 10px",
      padding: "20px",
    },
    author: {
      margin: "20px 0px",
      lineHeight: "1.5",
      "@media(max-width: 1000px)": {
        margin: "10px 10px",
        padding: "20px",
      },
    },
  };
  const mediaQueries = {
    "@media (max-width: 1000px)": {
      container: {
        width: "400px",
        minHeight: "600px",
        flexDirection: "column",
      },
      rightImg: {
        height: "300px",
      },
      content: {
        margin: "10px 10px",
        padding: "20px",
      },
      about: {
        gridTemplateColumns: "[one] 100%",
        gridTemplateRows: "[one] [two]",
      },
    },
    // '@media only screen and (max-width: 720px)': {
    //   about : {
    //   gridTemplateColumns: '[one] 100%',
    //   gridTemplateRows: '[one] [two]'
    //   }
    // },
    "@media (min-width: 768px)": {
      about: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
    /* For tablets and mobiles */
    "@media (max-width: 767px)": {
      about: {
        flexDirection: "column",
      },
    },
    
  };

  const mergedStyles = { ...styles, ...mediaQueries };

  return (
    <div style={mergedStyles.newhome}> 
   
    <video  autoPlay muted loop width="100%"    loading="lazy">
         <source src="/images/banner/Event Summary Video.mp4" type="video/mp4"/>
      </video>
      
    <Banner/>
      <Fade>
        <h1
          className="abouth1"
          // style={styles.h1}
        >
          About Us
        </h1>
      </Fade>
      <AboutUs />
      <Fade>
        <div className="flagship-text">
          <h1>Flagship Events</h1>
        </div>
      </Fade>
      <Carousel />
      {/* <ReviewCarousel />*/}
      {/* <Testimonials/>  */}
      {/* <ScrollAnimation/> */}
    </div>
  );
}
export default Home;
