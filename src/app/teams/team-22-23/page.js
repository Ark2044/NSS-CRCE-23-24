// src/pages/events/Team_2023_24.jsx
"use client";
import React from 'react';

import PrinCardList from '@/components/team_23_24/PrinCardList';
import POCardList from '@/components/team_22_23/POCardList';
import SCCardList from '@/components/team_22_23/SCCardList';
import JCCardList from '@/components/team_22_23/JCCardList';
import '@/components/cubecarousel/CubeCarousel.css';
import styled from 'styled-components';
import '../team-23-24/team.css';

const AboutUsBoxHero = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 35em) {
    grid-template-columns: 1fr;
      gap:  1rem;
  }
`;


function Team_2022_23() {
  // Define styles for the component
  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Pacifico, cursive',
      background: 'white', // White background
    },
    heading: {
      fontSize: '3em',
      color: '#4285F4', // Google Blue heading
      fontFamily: 'inherit',
    },
    subheading: {
      fontSize: '2em',
      color: '#0F9D58', // Google Green subheading
      fontFamily: 'inherit',
    },
    paragraph: {
      fontSize: '1rem',
    lineHeight: '1.5',
    textAlign: 'justify',
    margin: '20px',
    color: 'black',
    fontWeight: '700',
    },
  };
  
  
  
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Team 2022-23</h1>
      <br />
      <h2 style={styles.subheading}>Principal</h2>
      {/* <br/> */}
      <div className='aboutus'>
        <div className='aboutus_box'>
          {/* <div className='about_box_hero' style={styles.aboutus_box_hero}> */}
          <AboutUsBoxHero>
            <div className='about_box_hero_left'>
              <PrinCardList />
            </div>
            <div className='about_box_hero_right'>
              <p style={styles.paragraph}>
                {" "}
                NSS CRCE has been working with this spirit of mind, ever since its
                inception. Toggling between the rigours of professional studies,
                projects and development of technical skill sets, NSS CRCE members
                have always followed their passion to contribute their best to the
                service of society and moulding the younger generation with the
                right values and practices that takes care of Mother Earth and
                humanity at large. I have always been impressed by the numbers and
                range of activities taken up by the NSS CRCE chapter from
                developmental programmes for our Agnel Ashram kids to two blood
                donation camps every year, awareness drives on socially relevant
                issues, assisting the Mumbai Police in crowd management during
                festivals, clean up drives, tree planting, assistance in relief work
                during natural calamities to 7-day rural camp each year with one
                development activity for the benefit of the village, interaction
                with villagers and guiding sessions for children and youth. Best
                Wishes to our NSS CRCE chapter to continue their good work and
                motivate more students to get involved and work for socially
                relevant causes. Their &apos;You&apos; before &apos;Me&apos; attitude makes us proud
                that they hold the vision of our founding Fathers high.
              </p>
            </div>
            </AboutUsBoxHero>
          {/* </div> */}
        </div>
      </div>
      
      <h2 style={styles.subheading}>Program Officers</h2>
      <br />
      <POCardList />
      <br />
      <h2 style={styles.subheading}>Senior Council</h2>
      <br />
      <SCCardList />
      <br />
      <h2 style={styles.subheading}>Junior Council</h2>
      <br />
      <JCCardList />
    </div>
  );
}

export default Team_2022_23;
