"use client"
import React from 'react';

import AugustEventList from '@/components/events_22_23/AugustEventList';
import SeptemberEventList from '@/components/events_22_23/SeptemberEventList';
import OctoberEventList from '@/components/events_22_23/OctoberEventList';
import DecemberEventList from '@/components/events_22_23/DecemberEventList';
import JanuaryEventList from '@/components/events_22_23/JanuaryEventList';
import FebruaryEventList from '@/components/events_22_23/FebruaryEventList';
import MarchEventList from '@/components/events_22_23/MarchEventList';

function Events_2022_23() {
    return (
       <div>
        <h1>August 2022</h1>
        <br></br>
      {/* Home page content */}
           <AugustEventList />
       <br></br>
       <h1>September 2022</h1>
       <br></br>
       <SeptemberEventList/>
       <br></br>
       <h1>October 2022</h1>
       <br></br>
       <OctoberEventList/>
       <br></br>
       <h1>December 2022</h1>
       <br></br>
      <DecemberEventList/> 
      <br></br>
      <h1>January 2023</h1>
      <br></br>
      <JanuaryEventList/>
      <br></br>
      <h1>February 2023</h1>
      <br></br>
      <FebruaryEventList/>
      <br></br>
      <h1>March 2023</h1>
      <br></br>
      <MarchEventList/>



       </div>
    );
}

export default Events_2022_23;