"use client"
import React from 'react';
import AugustEventList from '@/components/events_23_24/AugustEventList';
import SeptemberEventList from '@/components/events_23_24/SeptemberEventList';
import OctoberEventList from '@/components/events_23_24/OctoberEventList';
import DecemberEventList from '@/components/events_23_24/DecemberEventList';
import JanuaryEventList from '@/components/events_23_24/JanuaryEventList';
import FebruaryEventList from '@/components/events_23_24/FebruaryEventList';
import MarchEventList from '@/components/events_23_24/MarchEventList';

function Events_2023_24() {
  return (
    <div>
      <h1>August 2023</h1>
      {/* Home page content */}
      <br/>
      <AugustEventList />
      
      <br/>
      <h1>September 2023</h1>
      <br/>
      <SeptemberEventList/>
      <br/>
      <h1>October 2023</h1>
      <br/>
      <OctoberEventList/>
      <br/>
      <h1>December 2023</h1>
      <br/>
      <DecemberEventList/> 
      <br/>
      <h1>January 2024</h1>
      <br/>
      <JanuaryEventList/>
      <br/>
      <h1>February 2024</h1>
      <br/>
      <FebruaryEventList/>
      <br/>
      <h1>March 2024</h1>
      <br/>
      <MarchEventList/>
    </div>
  );
}

export default Events_2023_24;
