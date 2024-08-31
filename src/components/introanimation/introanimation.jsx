import React, { useEffect } from "react";
import "../cubecarousel/CubeCarousel.css";
import gsap from "gsap";

const IntroAnimation = () => {
  useEffect(() => {
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
      }
    );

    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  }, []);
  return (
    //   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'black', color: "white" }}>
    // <div style={{ margin: 0, padding: 0, background: 'black', color: ' blue', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    //   <div className="centre">
    //     <div className="ring"> </div>
    //     <img src='/images/logos/nss-logo.svg' width={'350px'} height={'350px'}></img>
    //   </div>
    // </div>
    <div style={{ height: "100vh", marginTop: "-100px" }}>
      <div className="intro-container">
        <h1>Welcome Volunteers!</h1>
      </div>

      <div className="loading-page">
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <image
            xlinkHref="/images/logos/nss-logo.svg"
            x="-160"
            y="50"
            width="800"
            height="600"
          />
        </svg>
        <div className="name-container">
          <div className="logo-name">NSS CRCE</div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
