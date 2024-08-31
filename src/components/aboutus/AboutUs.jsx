import React from "react";
import CubeCarousel from "../cubecarousel/CubeCarousel";

import "../cubecarousel/CubeCarousel.css";
import { Slide } from "react-awesome-reveal";

function AboutUs() {
  return (
    <div className="aboutus">
      <div className="aboutus_box animate__animated slideInLeft">
        {/* <div className="aboutus_box_hero"> */}
          <Slide direction="left">
            {/* <div className="aboutus_box_hero_left animate__animated slideInLeft"> */}
              {/* <h1 >About Us</h1> */}
              {/* <CubeCarousel /> */}
            {/* </div> */}
          </Slide>
          <Slide direction="right">
            <div className="aboutus_box_hero_right ">
              <p>
                {" "}
                The National Service Scheme(NSS) has been enthusiastically conducting
          activities to help people from the past 50 years. It was launched on
          Gandhiji&apos;s centenary year to continue his ideas of community service
          among the youth of our nation. NSS is a student association of the
          youth studying in university. We National Service Scheme Unit of Fr.
          Conceicao Rodrigues College of Engineering, Bandra, Mumbai. With our
          team of 100 volunteers carry out our social responsibility by
          organizing and attending various event like Beach cleanups, Tree
          plantations, Crowd management, Awareness rallies and many more.
          NSS-CRCE has adopted a village for the period of 5 years at
          Tandulwadi, Saphale, Maharashtra.
              </p>
            </div>
          </Slide>
        {/* </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
