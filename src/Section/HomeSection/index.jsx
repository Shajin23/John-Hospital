import { HomeBanner } from '@/Banner/HomeBanner';
import React from 'react'
import HomeBook from './HomeBook';
import Homespecialities from './Homespecialities';
import HomeDoctors from './HomeDoctors';

const HomeSection = () => {
  return (
    <div>
      <HomeBanner />
      <HomeBook />
      <Homespecialities />
      <HomeDoctors />
    </div>
  );
}

export default HomeSection;